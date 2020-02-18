const express = require("express");
let api = express.Router(),
  control = require("../controles/crud");



api.get("/data", control.getDatos);
api.post("/data", control.postDatos);
api.put("/data", control.updateDatos);
api.delete("/data", control.deleteDatos);
api.get("/datosbyid", control.getDatosbyID);
api.post("/login", control.login);

module.exports = api;
