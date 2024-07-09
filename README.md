# Movie Search React

Movie Search React es una aplicación web que permite buscar información sobre películas utilizando la API de The Movie Database [TMDB](https://www.themoviedb.org/). La aplicación está construida con React Vite y utiliza Material UI para los componentes de la interfaz de usuario.

## Screen
[![Captura-de-pantalla-2024-07-08-233851.png](https://i.postimg.cc/c4rYCGKr/Captura-de-pantalla-2024-07-08-233851.png)](https://postimg.cc/w7Y34PQp)

## Requisitos

- Node.js
- npm o yarn

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/ivancidev/movies-search-react.git
   ```
2. Navega al directorio del proyecto:

    ```
    cd movies-search
    ```
3. Instala las dependencias del proyecto:
    ```
    npm install
    ```
    o
    ```
    yarn install
    ```
4. Crea un archivo ```.env``` en la raíz del proyecto y agrega las siguientes variables de entorno:
    ```
    VITE_URL=https://api.themoviedb.org/3/search/movie
    VITE_API_KEY=tu_apikey_de_tmdb
    ```

## Uso
1. Inicia la aplicación en modo de desarrollo:
    ```
    npm run dev
    ```
   o
    ```
    yarn dev
    ```

## Tecnologías Utilizadas
- React Vite
- [Material UI](https://mui.com/material-ui/)
- [TMDB](https://www.themoviedb.org/)

## Configuracion
El archivo ```env.js``` en la carpeta config se utiliza para importar las variables de entorno desde el archivo .env:

 ```
    export const URL = import.meta.env.VITE_URL;
    export const API_KEY = import.meta.env.VITE_API_KEY;
 ```