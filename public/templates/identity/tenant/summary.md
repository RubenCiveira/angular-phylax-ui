# Summary: {{name}}

Generated on {{datetime @now}}.

| | |
|:--|:--|
| Name | {{default name '—'}} |
| Root | {{default root '—'}} |
| Domain | {{default domain '—'}} |
| Enabled | {{default enabled '—'}} |
| Mark for delete | {{default markForDelete '—'}} |
| Mark for delete time | {{datetime markForDeleteTime}} |

## Users

{{#if users.length}}
| Name | Email | Welcome at | Email verified |
|:--|:--|:--|:--|
{{#each (sort users 'name')}}
| {{default name '—'}} | {{default email '—'}} | {{datetime welcomeAt}} | {{default emailVerified '—'}} |
{{/each}}
{{else}}
_No users._
{{/if}}

## Providers

{{#if providers.length}}
| Name | Provider type | Enabled | Direct access |
|:--|:--|:--|:--|
{{#each (sort providers 'name')}}
| {{default name '—'}} | {{default providerType '—'}} | {{default enabled '—'}} | {{default directAccess '—'}} |
{{/each}}
{{else}}
_No providers._
{{/if}}

## Conditions

{{#if conditions.length}}
| Resource server | Enabled | Activation date |
|:--|:--|:--|
{{#each (sort conditions 'uid')}}
| {{default resourceServer.code '—'}} | {{default enabled '—'}} | {{datetime activationDate}} |
{{/each}}
{{else}}
_No conditions._
{{/if}}
