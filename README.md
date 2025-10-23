# Nombre del Proyecto

Hola en este proyecto, es exclusivo para deployar y probar funcionalidades de API, se creo otro repositorio simulando la configuracion de AWS donde este tiene mejor estructura

## Requisitos

Node >= v16 (En mi caso use la v22.11.0, porque actualmente es la que da soporte AWS)
No estar ocupando el puerto 3000
Instalar con npm i

## Dependencias informativas

TypeScript
Jest
Nodemon
ts-node
ts-jest

## Características

Se crearon 6 API REST, donde :
1) POST - http://localhost:3000/customer - createCustomer : Es la simulacion de la creacion de un nuevo cliente
2) GET - http://localhost:3000/customer - getCustomer : Es la obtencion de la lista de usuarios, aqui se podria mandar filtros para discriminar datos
3) GET - http://localhost:3000/customer/?id=1 - getCustomerId : Es la obtencion unicamente de solo 1 usuario
4) DELETE - http://localhost:3000/customer/1 - deleteCustomer : Eliminar el registro de 1 solo usuario
5) PUT - http://localhost:3000/customer/credit - addCreditCustomer : Mandar un update para actualizar el monto del posible credito del cliente
6) PUT - http://localhost:3000/customer/1 - updateCustomer: Actualizar datos del cliente, indistintamente de cuales sean

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/edwinpoolcouoh/taxdowndeploy.git

## Pruebas

Existen validaciones en algunas APIs, para que este no reciba basura que se envia, para probar hay 2 maneras, levantando un pequeño servidor o de manera local

1) Servidor
    a) Para esto necesitamos correr "npm run dev" dentro de la carpeta donde hayamos instalado todo, debera mostrar que se creo un deploy
    b) Descar este postman https://api.postman.com/collections/24685898-0d9575d5-fe61-4a6c-b0c0-b5f8b39ed16f?access_key=PMAT-01K87A2CY1H2Y3QGQCQP5XECSK, o dentro el proyecto en "/Taxdown.postman_collection.json" donde se tendras una coleccion de todas las pruebas que se hicieron (se compartira igual la coleccion a los responsables)
    c) Probar cada request y ver que te respondan de manera corecta

2) Local
    a) En la ruta /src/test/router.test.ts, estan declaradas todas, para probar cada una, se tiene que añadir "test.only", o en su dado quitarlo para probar todas de una vez
    b) En la terminal dentro la carpeta del proyecto, ejecutar "npm test" y con ello se haran las pruebas