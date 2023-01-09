# Aplicación Angular Microservicios y Monorepositorio

Esta es una aplicación esquleto. El proposito del proyecto es la expirementar con una mezcla de arquitectura hexagonal, simulando la comunicación con microservicios sobre monorepositorio para ver sus pros y sus contras. Se ha agregado el patrón Redux a través de la librería [NgRx](https://ngrx.io/docs).

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 15.0.2.

### Notas

En nigún momento se hace foco en las pruebas unitarias ni en las buenas prácticas del CSS. Sientase libre de descargarse el proyecto y valorar si el trabajo realizado le ayuda. Si lo desea, puede realizar cualquier petición de modificación que aporte una mejor forma hacer escalar un proyecto utilizando dicha arquitectura, mejore la implementación actual o ayude a un mejor enfoque del mismo.

### Comandos

- Ejecuta `ng serve` para arrancar un servidor de desarrollo en `https://localhost:4200`
- Ejecuta `npm run build` para compilar las librerías y proyecto app en la carpeta `/dist`.
- Ejecuta `npm run build:app` para compilar el proyecto en la carpeta `/dist`.
- Ejecuta `npm run build:products` para compilar la librería products del proyecto en la carpeta `/dist/products`.
- Ejecuta `npm run build:inventory` para compilar la librería inventory del proyecto en la carpeta `/dist/inventory`.
