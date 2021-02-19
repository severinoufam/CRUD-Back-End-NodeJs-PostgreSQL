/**
 * arquivo: app.js
 * descrição: arquivo responsável por fazer a conexão com arquivo server.js.
 * autor: severino de souza souza
 */

const express = require('express');
const cors = require('cors');

const app = express();

// => Rotas da API (doctor):
const index = require('./routes/index');
const doctorRoute = require('./routes/doctor.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
//app.use('/api/' , doctorRoute);

module.exports = app;