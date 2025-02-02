# ReactFernandoHerrera

## Crear proyecto: 

### Create React App
Crear proyecto React: https://create-react-app.dev/
En el curso se hizo con:
```bash
npx create-react-app my-app
```

Para iniciar el servidor de prueba ejecutar
```bash
npm start
```

### Vite (yarn)
```bash
# Crear proyecto
yarn create vite
```

```bash
# Instalar dependencias
yarn install
```

```bash
# Correr pro
yarn dev
```

## Pruebas
Al setar usando Vite, este no nos trae pro defecto la configuración de los test, es por esto que debemos hacerlas manualmente.

### Jest
Es un framework que sirve para hacer pruebas en aplicaciones de JS. Seguir apsos de configuración en https://jestjs.io/es-ES/docs/getting-started

Para ejecutar los test ejecutamos:
```bash
yarn test
```

En el package.json cambiamos es script de test agregandole la bandera `-- watchAll` para que no tengamos que ejecutar el comando cada vez que querramos hacer pruebas:
```bash
"test": "jest --watchAll"
```

Para que el IDE nos ayude con las diferentes opciones de Expect ejecutar el comando:
```bash
yarn add -D @types/jest
```

Si no funciona el autocompletado, cree el archivo `jsconfig.json` en la raiz del proyecto y dentro del archivo escribir:
```json
{ 
    "typeAcquisition": { 
        "include": [ "jest" ] 
    } 
}
```

