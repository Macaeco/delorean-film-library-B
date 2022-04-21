import express from "express";
import { curCtrl, cursCtrl } from "./curiosity.controller.js";
const crouter = express.Router();
crouter.route('/curiosity') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(curCtrl)
    .get(cursCtrl)
    export default crouter;