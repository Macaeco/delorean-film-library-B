import express from 'express'; 
import { registerCtrl, validateEmailCtrl, loginCtrl } from './auth.controller.js';
import { validateUser } from './auth.middleware.js';

const router = express.Router(); // creamos la ruta 
// esta es la authRouter del app-js, como solo hay una exportacion, por defecto podemos llamarla como  queramos en la pagina receptora, que siempre va a interpretar que es la que se a exportado aqui

// enpoint par el registro del usuario
router.post('/register', validateUser, registerCtrl); // ha asociado el controlador a cada ruta con el regusterCtrl

// enpoint par la validación del email del usuario
router.get('/validate', validateEmailCtrl); 

// enpoint par el login del usuario
router.post('/login', loginCtrl);

export default router;