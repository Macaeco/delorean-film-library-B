import {} from "dotenv/config";

import express from 'express';
import cors from 'cors';
import authRouter from './auth/auth.router.js';
import usersRouter from './users/users.router.js';
import { validateAuth } from './auth/auth.middleware.js';
import dotenv from "dotenv"
import router from './lists/lists.router.js'
import FLrouter from './follow/follow.router.js'

dotenv.config();
const app = express();
const port=process.env.PORT || 4000;
// const port = 4000;


app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => res.send('Pong'));
app.use('/auth', authRouter); // declaramos el router de autenticación
app.use('/users', validateAuth, usersRouter);
app.use('/',router) // declaramos el router de lists
// app.use('/FLists',FLrouter)

app.listen(port, () => console.log(`Servidor levantado hacía el señor, port: ${port}`));



