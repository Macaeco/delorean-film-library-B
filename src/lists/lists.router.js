import express from "express";
import { listCtrl, listsCtrl } from "./lists.controller.js";
const router = express.Router();
router.route('/lists') // definimos las rutas en el router sin poner el contexto del recurso. Eso se hace en el app
    .post(listCtrl)
    .get(listsCtrl)
    export default router;