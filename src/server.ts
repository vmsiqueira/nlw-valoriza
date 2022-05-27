import "reflect-metadata";
import express from 'express';

const app = express();

import "./database";

/**
 * GET => buscar uma informação
 * POST => criar uma nova informação
 * PUT => alterar uma informação
 * DELETE => remover um dado
 * PATCH => Alterar uma informação específica
*/

/**
 * Tipos de parâmetros
 * Route params => http://localhost:3000/produtos/102391209471
 * Query params => http://localhost:3000/produtos?name=teclado&description=tecladobom
 * Body params => {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
*/

app.listen(3000, () => console.log("Server is running"))