onej-bell
==============================================================================
Example project with Spring Boot, Docker, React.js, TypeScript and Webpack
==============================================================================

Prerequisites client-side
-------------------------

  - `npm install -g tsd`
  - `npm install -g webpack`

Installation client-side
------------------------

  - `npm install` — fetch dependencies from npm
  - `tsd update` — install type definitions for React.js
  - `npm run build` — build project into `./dist`
    + it runs `webpack -p` under the hood
====================================================================================

Run server-side
------------------------

  - `mvn package docker:build` — build project
  - `docker run -p 8080:8080 -t rjxby/onej-bell` — run spring-boot application

