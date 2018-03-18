# ToDo App

You can test the app at [ProgrammingCoursesCT.github.io/ToDo-App](https://ProgrammingCoursesCT.github.io/ToDo-App/)

## Prerequisites:
* [Google Chrome Web Browser](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Node JS](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/)

## Installation
* Install Angular CLI as global
    
        npm install -g @angular/cli

* Create an Angular application

        ng new Introduction-to-Web-Development --routing

## Development

* Start server

        ng serve
        
        ng serve --open --host=192.168.0.108

## Deployment
* Install Angular CLI GitHub pages

        yarn add --dev angular-cli-ghpages

* Build

        ng build --prod --base-href="https://programmingcoursesct.github.io/ToDo-App/"

* Deploy

        ./node_modules/angular-cli-ghpages/bin/angular-cli-ghpages