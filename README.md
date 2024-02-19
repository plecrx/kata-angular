# Kata Angular (Effy)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1b31192b-4a21-432c-872d-b8e74cf52bcd/deploy-status)](https://app.netlify.com/sites/kata-angular/deploys)

An Angular application with SSR in order to compute the financial support for a project, hosted on Netlify. 

## Tech

| Logo                                                                                                                       | Name           | Link                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------- |----------------| ------------------------------------------------------------------------------------ |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo"> | Typescript     | [https://github.com/microsoft/TypeScript](https://github.com/microsoft/TypeScript)   |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint logo">              | ESLint         | [https://github.com/eslint/eslint](https://github.com/eslint/eslint)                 |
| <img height="70" src="https://prettier.io/icon.png" alt="Prettier logo">                                                   | Prettier       | [https://github.com/prettier/prettier](https://github.com/prettier/prettier)         |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo"> | Angular 17     | https://angular.io   |

| Script     | Description                                                                            |
|------------|----------------------------------------------------------------------------------------|
| `ng`      | Starts the development server.                                                         |
| `build`    | Compiles TypeScript files and builds the production-ready application with Vite.       |
| `serve:ssr:angular-starter`    | Run the application in SSR mode.       |
| `format` | Format source code.                                                                    |
| `test`     | Runs unit tests with Jest.                                                           |
| `lint`     | Runs ESLint on all relevant files.                                                     |
| `postinstall`  | Install Husky hooks.                                                                   |


## Get started

1. Clone this repo.
```bash
git clone git@github.com:plecrx/kata-angular.git
cd kata-angular
```

2. Install all dependencies. (yarn as default)
```bash
yarn
```

## Project structure

-   `.husky/` : scripts which lint and format the staged files before committing
-   `.jest/` : The cache for jest tests
-   `src/` : The application source code
    -   `app/` : The static files (fonts, images, ...)
    -   `components/` : The components which will be used in pages
    -   `services/` : The services to manage data
    -   `pages/` : The application pages
    -   `types/` : Global types
    -   `config/` : App and server configuration files
    -   `main.ts` : The app entry point
    -   `main.server.ts` : The server entry point
    -   `routes.ts` : React routes configuration files

## Author

[Prescilla Lecurieux](mailto:prescilla.lecurieux@gmail.com)
