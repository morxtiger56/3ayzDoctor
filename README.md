# 3ayz doctor
Powered by Angular

This project includes the tak aquired by it spark


## Authors

- [@Mohamed Salah](https://github.com/MohamedSalah-ElMaestroCode)


## Technologies Included
- Angular
- Tailwindcss
- PrimeNG UI Components
## Run Locally

Clone the project:

```bash
  git clone https://github.com/morxtiger56/3ayzDoctor
```

Install dependencies:

```bash
  npm install
```

Start the development server:

```bash
    ng serve
```

Start the arabic development server:

```bash
    ng serve --configuration ar
```

✋ Heads up » When we run ng serve or npm start our app will run in development mode with our source locale, and our locale switcher won’t work.

## Features

- Localization
- Live previews
- Fullscreen mode
- Cross platform


## Project Structure

Here is the folder structure for the project

```bash
- /src
    - /app
        - /lib
            - utils
            - ....
        - /services
            - api.service.ts
        - /directives
            - component.directive.ts
        - /models
            - IDoctor.ts
            - IOffer.ts
            - ...
        - /components
            - /card
                - card.component.ts
            - /footer
                - footer.component.ts
                - footer.component.html
            - ...
        - /home-page
            - home-page.component.ts
            - home-page.component.html
            - home-page.component.css
        - ...
    - app.routes.ts
    - ...

```
#### Folders Description
- components folder: contains all the shared components between pages

- lib folders: contains all the utilite methods aquired by the project

- services folder: holds the services and the logic to connect to external apis

- folders ending with -page: are folders contains the logic and code for each and every page

- app.routes.ts: contains the main router for the app

