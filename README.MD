# INTRO TO USING THE REACT PORTION OF TECH ACADEMY LMS
## CODED WITH LOVE BY ADAM SMITH, AARON MEDINA, GARRETT GUEVARA AND SAJI BHASKARAN

-All dependencies are located in the package.json.
-To get the dependencies on your machine you will need to have installed NodeJS and NPM (Node Package Manager).
-You can check if you have these installed by typing "node-v" and "npm -v" into the command line. If you have it, it should show you your local node/npm version.

*** IF YOU DON'T HAVE NODE, YOU CAN VISIT THE NODEJS WEBSITE TO DOWNLOAD IT: https://nodejs.org/en/ ***

-Once these are installed, navigate into the project via the command line and run "npm install".
-Middleware (transpiling and bundling) is handled by Webpack and Babel and has already been configured for this project.
-Middleware configuration is located in webpack.config.js. Please don't touch it if you don't know what you're doing.
-All editable files are inside "Scripts/React-Redux-App/src"
-Before editing a file run this command to automatically compile files on save:

$ npm run watch

-To close any running process or server in the command line, use "CTRL-C" twice


## Useful commands to know:

Install a package globally:
$ npm install <package name> -g

Install a package locally without changing package.json:
$ npm install <package name>

Install a package and update the project dependencies in package.json:
$ npm install --save <package name>

Install a package and update the developer dependencies in package.json:
$ npm install --save-dev <package name>

^^^You can uninstall with the same commands but using "uninstall" instead of "install"^^^

Search a package:
$ npm search <package name>

Update a package:
$ npm update <package name>

List local packages:
$ npm dir

List global packages:
$ npm dir -g

# LearningManagementSystem
