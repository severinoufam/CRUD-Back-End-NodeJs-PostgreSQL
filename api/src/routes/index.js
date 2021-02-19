/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação do lado do back-End.
 * autor: severino de souza souza
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        sucess: 'true',
        menssage: 'Seja bem-vindo(a)',
        version: '1.0.0'
    });
});

module.exports = router;