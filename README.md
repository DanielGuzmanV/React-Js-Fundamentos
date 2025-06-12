## Curso de React con Javascript
Curso realizado por `AMazaing Code`

- [Canal de AMazaing Code](https://www.youtube.com/@AMaza-ing)
- [Video del curso de React](https://youtu.be/vH1u6Xv6oXw?si=QXQmp4X0WIqQoBIE)

## Realizar el testing:

#### 1. Config del package.json
Pondremos las siguientes dependencias en package.json:

```json
"devDependencies": {
    // Agregar las dependencias dentro de las flechas:
    // |----------------------------->
    "@babel/preset-env": "7.27.2",
    "@babel/preset-react": "7.27.1",
    "@testing-library/jest-dom": "6.6.3",
    "@testing-library/react": "16.3.0",
    // |----------------------------->

    // -- Dependencias ya agregdas -- : 
    // "@eslint/js": "^9.25.0",
    // "@types/react": "^19.1.2",
    // "@types/react-dom": "^19.1.2",
    // "@vitejs/plugin-react": "^4.4.1",
    // "eslint": "^9.25.0",
    // "eslint-plugin-react-hooks": "^5.2.0",
    // "eslint-plugin-react-refresh": "^0.4.19",

    // Agregar las dependencias dentro de las flechas:
    // |----------------------------->
    "identity-obj-proxy": "^3.0.0",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "30.0.0",
    "jest-svg-transformer": "1.0.0",
    "react-test-renderer": "19.1.0",
    // |----------------------------->

    "globals": "^16.0.0",
    "vite": "^6.3.5"
  }
```
Una vez puesto todas las dependencias en la terminal ejecutamos el siguiente comando para descargar todas las dependencias:

```bash
npm install
```

Finalmente en la parte de `scripts` pondremos agregamos lo siguiente:

```json
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "jest" // <----------- Agregar en scripts
  },
```

#### 2. Crear el archivo jest.setup.js
En la raiz del proyecto crearemos el archivo de `jest.setup.js` y dentro pondremos los siguiente:

```js
import "@testing-library/jest-dom"
```

#### 3. Crear el archivo jest.config.cjs
En la raiz del proyecto crearemos el archivo de `jest.config.cjs` y dentro pondremos lo siguiente:

```js
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.cjs",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
```

#### 4. Crear la carpeta __mocks__
En la raiz del proyecto crearemos la carpeta de `__mocks__` y dentro creamos el archivo de `fileMock.cjs` y dentro pondremos lo siguiente:

```js
module.exports = {};
```

#### 5. Crear el archivo .babelrc
Finalmente en la raiz del proyecto creamos el archivo de `.babelrc` y dentro pondremos lo siguiente:

```js
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

## Realizar prueba para ver si todo esta bien:
En la carpeta de `pages` que esta dentro de la carpeta `src` creamos un archivo con la siguiente extencion:
`HomePage.test.js` y tendro pondremos el siguiente codigo:

```js
describe("HomePage", () => {
  it("simple test", () => {
    expect(1).toEqual(2);
  })
})
```
finalmente en la terminal pondremos el siguiente comando:
```bash
npm run test
```

Donde tendria que salirnos algo como esto:
```bash
$ npm run test

> react-js-fundamentos@0.0.0 test
> jest

 PASS  src/pages/HomePage.test.js
  HomePage
    √ simple test (6 ms)                                               
                                                                       
Test Suites: 1 passed, 1 total                                         
Tests:       1 passed, 1 total                                         
Snapshots:   0 total
Time:        4.408 s
Ran all test suites.
```

## Ver el video
Para saber si todo esta bien y no hay problemas ver el video del curso [Cap: Testing Config - AMazaing Code "React - Curso Completo desde 0"](https://youtu.be/vH1u6Xv6oXw?si=O5R5AGoALySoRdHc&t=12919)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
