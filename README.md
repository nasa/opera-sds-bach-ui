# opera-sds-bach-ui
OPERA's Bach UI repository

# Running locally

Prerequisites:
* npm (see `.nvmrc` file for recommended version). Install using `npm install`.

Recommended:
* nvm. use `nvm install` from the project root directory to install the recommended `npm` version as needed.

Steps:
1. Ensure `webpack.config.js` can execute without error. Do this by fixing the referenced required package in `webpack.config.js` using the following command.
   `cp src/config/index.dev.template.js src/config/index.js`

2. Run the application using `npm run build`.
