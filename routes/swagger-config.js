const routes = require('express').Router();
const swaggerUi = require("swagger-ui-express");
const outputFile = require("../swagger-config.json");
routes.use("api-docs", swaggerUi.serve);
routes.get("api-docs", swaggerUi.setup(outputFile));

module.exports = routes;