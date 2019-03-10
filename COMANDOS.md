
	INSTALAR ANGULAR
npm install -g @angular/cli
npm i -g @angular/cli@latest

La opción –g es para instalarlo de manera global.
Si queremos actualizar una instalación previa de Angular CLI, emplearemos:

npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli

	GENERAR UN PROYECTO
ng new <nombre aplicacion>

	GENERAR UN MÓDULO
ng g m <nombre>
	Con ROUTING
ng g m <nombre> --routing

	GENERAR UN COMPONENTE
ng g c <nombre componente>

	GENERAR UN SERVICIO
ng g s <nombre>



	INSTALAR ESQUEMAS
npm install @angular-devkit/schematics --save-dev
npm install @ngrx/schematics --save-dev
ng config cli.defaultCollection @ngrx/schematics

	INSTALAR LIBRERIAS
npm install  @ngrx/store --save
npm install  @ngrx/store-devtools --save
npm install  @ngrx/effects --save

	INSTALAR ROUTER-STORE
npm install @ngrx/router-store --save


	GENERAR STORE RAIZ
ng g st State --root -m app.module.ts

	GENERAR REDUCER Y ACTION
* en la carpeta /reducers
ng g r <Nombre> --spec false -r index.ts
ng g a <Nombre> --spec false

	GENERAR EFECTO
ng g ef <Nombre> --root -m ../app.module.ts --spec false

	CONFIGURAR SERVICE WORKER


********************************

	ARRANCAR APP
- En el puerto 4200
ng serve
-- Especificando el puerto
ng serve --port <num del puerto>


***********************
**** PRODUCCIÓN *******
***********************
ng build --prod
cd ./dist/speed

** servidor para probar
npm i -g http-server
http-server -c-1

************************
Módulo 5. Server side rendering/5.1 Generación Express
 
5.1 Generación Express
ng generate universal --client-project <nombreApp>



npm install @angular/platform-server --save
npm install @nguniversal/module-map-ngfactory-loader --save
npm install @nguniversal/express-engine --save
npm install ts-loader --save
npm install -D webpack-cli

**********************************
para que lea los Json editar tsconfig.json y tsconfig.app.json
añadir despues de lib []
,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true

***********************************************

Presentamos un listado de Comandos básicos para nuevos usuarios de NPM.

	Inicializar el proyecto crea el archivo package.json
npm init

**	Buscar paquetes
npm search [nombreDelPaquete]

**	Instalar un paquete
npm install [nombreDelPaquete]

**	Instalar una version especifica de un paquete usando “version” irá la versión especificada, de lo contrario, si no se especifica, se instalará la última disponible.

npm install nombreDelPaquete@version

**	Instalar el paquete y modifica el archivo package.json agregando la librería en las dependencias

npm install [nombreDelPaquete] --save

**	Instalar el paquete y modifica el archivo package.json agregando la librería en las dependencias solo necesarias para desarrollo

npm install [nombreDelPaquete] --save-dev

**	Si no se especifica un paquete, se entiende que se desea verificar/instalar todas las dependencias dentro del archivo package.json. Esto es habitual, cuando se descargan proyectos o aplicaciones de github, ya que las dependencias deben ser instaladas luego de descargar el proyecto (por razones de tamaño).

npm install

**	Con la opción -g o –global se le está indicando a npm que debe instalar el paquete de manera Global, esto quiere decir que se va a poder utilizar desde cualquier directorio.

npm install -g [nombreDelPaquete]

**	Eliminar paquete local
npm rm [nombreDelPaquete]
npm uninstall [nombreDelPaquete]

**	Eliminar paquete de forma global
npm rm -g [nombreDelPaquete]
npm uninstall -g [nombreDelPaquete]

**	Listar las dependencias de mi proyecto
npm ls

**	Consultar las últimas versiones compatibles con las librerías que tienes en tu proyecto

npm outdated
**	# Actualizar todas las librerías de tu proyecto que sean compatibles
npm update -save