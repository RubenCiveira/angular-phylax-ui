import { TranslocoModule, provideTranslocoScope } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { SecurityDomainViewScopesComponent } from './security-domain-view-scopes.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SecurityDomainViewScopesComponent],
  exports: [SecurityDomainViewScopesComponent],
  imports: [CommonModule, FormsModule, MatSelectModule, MatCardModule, 
    MatIconModule, MatInputModule, ReactiveFormsModule,
    MatFormFieldModule, MatButtonModule, MatSlideToggleModule, TranslocoModule],
  providers: [provideTranslocoScope({ scope: 'access/security-domain', alias: 'access.security-domain' })],
  bootstrap: [],
})
export class SecurityDomainViewScopesModule {}
