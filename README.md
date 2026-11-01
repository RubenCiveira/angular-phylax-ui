# Vista

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Gestión de errores

Los errores no capturados llegan a `GlobalErrorHandler`, que los registra en telemetría (un span por error).

Los errores HTTP de `ClientService` se avisan con 2 s de retraso: un diálogo o, para los 422, un snackbar. En ese margen el componente puede tratarlos él mismo y evitar el aviso global con `handledErrors`:

```ts
import { handledErrors } from '@shared/context/observability/error.service';

this.repository
  .add(item)
  .pipe(handledErrors([422]))
  .subscribe({
    next: () => this.close(),
    error: (err) => this.showValidation(err.error), // un 422 no muestra el aviso global; el resto, sí
  });
```

`markErrorHandled(error)` hace lo mismo sin operador. El error se relanza: hay que capturarlo (`error` o `catchError`), porque si no llega a `GlobalErrorHandler`. Los textos salen de `errors.422` y `errors.generic` en `public/i18n/*.json`.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
