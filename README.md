# Introduction to Web Development

You can find the list of all courses at [programmingcoursesct.github.io](https://programmingcoursesct.github.io/).

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

## Deployment
* Install Angular CLI GitHub pages

        yarn add --dev angular-cli-ghpages

* Build

        ng build --prod --base-href="https://programmingcoursesct.github.io/Introduction-to-Web-Development/"

* Deploy

        ./node_modules/angular-cli-ghpages/bin/angular-cli-ghpages