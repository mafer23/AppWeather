# AppClima

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.
El aplicativo se desarrollo con angular 12, tailwind y angular material

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Para instalar tailwind de la version 11 o mayor , se raliza los siguientes pasos
1 Instalar con npm install -D tailwindcss

Algunas personas ejecutan versiones anteriores de CLI o @angular-devkit/build-angular. Asegúrese de que su paquete.json se vea AL MENOS con la versión 11.2.0 o tenga una versión más reciente (si está disponible)

2 Cree un archivo de configuración TailwindCSS en el espacio de trabajo o en la raíz del proyecto. Nombre ese archivo de configuración tailwind.config.js
Debe tener un aspecto como esta en el articulo:
https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l



3 En su archivo styles.scss agregue las siguientes importaciones de TailwindCSS:

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

<br>
si está utilizando CSS, no SCSS, su archivo debería tener este aspecto:

@tailwind base;
@tailwind components;
@tailwind utilities;

Para Mayor Compresión puede ver el blog : https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l


## Angular Material
ng add @angular/material
