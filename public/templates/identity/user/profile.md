# Profile: {{name}}

Generated on {{datetime @now}}.

| | |
|:--|:--|
| Name | {{default name '—'}} |
| Email | {{default email '—'}} |
| Welcome at | {{datetime welcomeAt}} |
| Email verified | {{default emailVerified '—'}} |
| Enabled | {{default enabled '—'}} |
| Approval status | {{default approvalStatus '—'}} |
| Temporal password | {{default temporalPassword '—'}} |
| Use second factors | {{default useSecondFactors '—'}} |
| Blocked until | {{datetime blockedUntil}} |
| Federated provider | {{default federatedProvider '—'}} |
| Tenant | {{default tenant.name '—'}} |

## Identities

{{#if identities.length}}
| Login provider | Subject | Created at |
|:--|:--|:--|
{{#each (sort identities 'subject')}}
| {{default loginProvider.name '—'}} | {{default subject '—'}} | {{datetime createdAt}} |
{{/each}}
{{else}}
_No identities._
{{/if}}

## Roles

{{#if roles.length}}
| Resource server | Oauth client |
|:--|:--|
{{#each (sort roles 'uid')}}
| {{default resourceServer.code '—'}} | {{default oauthClient.code '—'}} |
{{/each}}
{{else}}
_No roles._
{{/if}}

## Groups

{{#if groups.length}}
| Resource server | Oauth client |
|:--|:--|
{{#each (sort groups 'uid')}}
| {{default resourceServer.code '—'}} | {{default oauthClient.code '—'}} |
{{/each}}
{{else}}
_No groups._
{{/if}}
