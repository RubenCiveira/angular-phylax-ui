import { TranslocoService } from '@jsverse/transloco';
import { ActionContainerComponent } from 'app/common/toolkit/action/action-container.component';
import { Action } from 'app/common/toolkit/action/action.model';
import { SecurityDomain } from 'app/features/access/security-domain/model/security-domain.model';
import { SecurityDomainRepository } from 'app/features/access/security-domain/repository/security-domain-repository.service';
import { input, viewChild, Component, signal, TemplateRef } from '@angular/core';
import { SecurityScopeRepository } from '@features/access/security-scope/repository/security-scope-repository.service';
import { ScopeAssignationRepository } from '@features/access/scope-assignation/repository/scope-assignation-repository.service';
import { TrustedClientRepository } from '@features/access/trusted-client/repository/trusted-client-repository.service';
import { RelyingPartyRepository } from '@features/access/relying-party/repository/relying-party-repository.service';
import { RelyingParty } from '@features/access/relying-party/model/relying-party.model';
import { TrustedClient } from '@features/access/trusted-client/model/trusted-client.model';
import { SecurityScope } from '@features/access/security-scope/model/security-scope.model';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

export class Grouped {
  constructor(
    public readonly resource: string,
    public readonly scopes: GroupedItem[],
  ) {}
}

export class GroupedItem {
  constructor(
    public readonly label: string,
    public readonly uid: string,
    public readonly checked: string | undefined
  ) {}
}

@Component({
  selector: 'security-domain-view-scopes',
  standalone: false,
  templateUrl: './security-domain-view-scopes.component.html',
  styleUrl: './security-domain-view-scopes.component.scss',
})
export class SecurityDomainViewScopesComponent implements Action {
  readonly name = 'scopes';
  readonly contextual = true;
  readonly multiple = false;
  container = signal<ActionContainerComponent | undefined>(undefined);
  selection = signal<any[]>([]);
  render = viewChild<TemplateRef<any>>('formTemplate');

  form: FormGroup;
  filterResource: string | null = '';
  assignedReferences: {[key:string]: string} = {};
  
  title = signal<string>('scopes');
  label = signal<string>('scopes');
  icon = signal<string>('gavel');
  tooltip = signal<string>('scopes');
  default = input<boolean>(false);
  
  visibleValue = true;
  enabledValue = true;
  
  allRelies = signal<RelyingParty[]>([]);
  allClients = signal<TrustedClient[]>([]);
  allScopes = signal<Grouped[]>([]);
  filteredScopes = signal<Grouped[]>([]);
  domainAssigned = signal<any>(undefined);
  currentDomain = signal<SecurityDomain | null>(null);

  constructor(
    private readonly repository: SecurityDomainRepository,
    private readonly scopes: SecurityScopeRepository,
    private readonly assigned: ScopeAssignationRepository,
    private readonly clients: TrustedClientRepository,
    private readonly parties: RelyingPartyRepository,
    transloco: TranslocoService,
  ) {
    this.form = new FormGroup({
      filter: new FormControl<string>(''),
    });
    this.form.controls['filter'].valueChanges.pipe(debounceTime(500)).subscribe((text) => {
      this.filter(text);
    });
    transloco.selectTranslateObject('action.scopes', {}, 'access/security-domain').subscribe((val) => {
      if (val.label) {
        this.label.set(val.label);
      }
      if (val.tooltip) {
        this.tooltip.set(val.tooltip);
      }
      if (val.icon) {
        this.icon.set(val.icon);
      }
      if (val.title) {
        this.title.set(val.title);
      }
    });
  }

  visible(items: any[]) {
    return this.visibleValue;
  }

  enabled(items: any[]) {
    return this.enabledValue;
  }

  run(): void {
    const domain = this.selection()[0];
    this.allScopes.set([]);
    this.assignedReferences = {};
    this.assigned.values({
      securityDomains: [ domain.uid ]
    }).subscribe((all) => {
      all.forEach( item => {
        this.assignedReferences[ item.securityScope!.$ref ] = item.uid;
      });
    });
    this.clients.values({}).subscribe((all) => {
      this.allClients.set(all);
    });
    this.parties.values({}).subscribe((all) => {
      this.allRelies.set(all);
    });
    this.currentDomain.set(domain);
  }

  lookup(event: string) {
    this.allScopes.set([]);
    const parts = event.split(':');
    if (parts[0] == 'client') {
      this.scopes
        .values({
          trustedClients: [parts[1]],
        })
        .subscribe((val) => {
          this.fillOptions(val);
        });
    } else {
      this.scopes
        .values({
          relyingPartys: [parts[1]],
        })
        .subscribe((val) => {
          this.fillOptions(val);
        });
    }
  }

  toogle(item: GroupedItem) {
    const domain = this.selection()[0];
    if( !!item.checked ) {
      this.assigned.deleteByKey( item.checked ).subscribe();
    } else {
      this.assigned.add( {
        uid: '',
        securityDomain: { $ref: domain.uid },
        securityScope: { $ref: item.uid },
        version: 0
      } ).subscribe();
    }
  }

  private fillOptions(val: SecurityScope[]) {
    const rows = this.fillGroups(val);
    this.allScopes.set(rows);
    if (this.filterResource) {
      const matcher = new RegExp(this.filterResource);
      this.filteredScopes.set(rows.filter((s) => matcher.test(s.resource)));
    } else {
      this.filteredScopes.set(rows);
    }
  }

  private filter(text: string | null) {
    this.filterResource = text;
    const rows = this.allScopes();
    if (this.filterResource) {
      const matcher = new RegExp(this.filterResource);
      this.filteredScopes.set(rows.filter((s) => matcher.test(s.resource)));
    } else {
      this.filteredScopes.set(rows);
    }
  }

  private fillGroups(all: SecurityScope[]): Grouped[] {
    const map = {} as { [key: string]: GroupedItem[] };
    all.forEach((scope) => {
      if (!map[scope.resource]) {
        map[scope.resource] = [];
      }
      const checked = this.assignedReferences[scope.uid] ?? undefined;
      map[scope.resource].push(new GroupedItem(scope.scope, scope.uid, checked));
    });
    const result: Grouped[] = [];
    Object.entries(map).forEach(([key, values]) => {
      result.push(new Grouped(key, values));
    });
    return result;
  }
}
