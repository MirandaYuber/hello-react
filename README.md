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
# Instalar yarn de forma global
npm install -g yarn
```

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

### Configurar Babel
Se ejecuta el sigueinte comando:
```bash
yarn add --dev babel-jest @babel/core @babel/preset-env
```

Crear archivo `babel.config.cjs` con lo siguiente:
```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

### Configuraciones de Jest
Para configuraciones para especificarle a Jest como se comporte en diferentes casos, se debe crear en la raiz del proyecto
el archivo `jest.config.js`. En este archivo exportaremos el modulo `jest.setup.js` el cual tendra dependencias que necesitaremos al momento de ejecutar nuestros test.

- Usar fetch en versiones de Node.js < 18:

  Instalamos la librería `whatwg-fetch` para desarrollo y en el archivo `jest.setup.js` importamos esta libreria.


### Testing library DOM
Para testear el DOM vamos a instalar la siguiente libreria para poder probar nuestros componentes de React:
```bash
yarn add --dev @testing-library/react
```

