//importaciones
const Koa = require('koa');
const app = new Koa();
const constantes = require('./_config/config');
const mongoose = require('./_config/conexion');
const bodyParser = require('koa-body-parser');
const cors = require('@koa/cors');
const movieRoutes = require('./_routes/movie-routes');
const swagger = require("swagger2");
const { ui, validate } = require("swagger2-koa");
const swaggerDocument = swagger.loadDocumentSync("api.yaml");

//Midlewares
app.use(cors());
app.use(bodyParser());
app.use(movieRoutes.routes());
app.use(movieRoutes.allowedMethods());
app.use(ui(swaggerDocument, "/swagger")); //http://localhost:3000/swagger



// otros
app.listen(constantes.port);

console.log("**************** SERVIDOR INICIADO ****************");