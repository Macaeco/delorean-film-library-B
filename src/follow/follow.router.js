import express from "express";
import { FListCtrl, FListSCtrl } from "./follow.controller.js";


const FLrouter = express.Router();

FLrouter.route('/') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(FListCtrl)
    .get(FListSCtrl)
  
    export default FLrouter;