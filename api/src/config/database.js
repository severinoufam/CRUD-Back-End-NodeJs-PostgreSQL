/**
 * arquivo: config.database.js
 * descrição: arquivo responsável pelas 'connectrionStrings' (Cosmos Db & Postgres)
 * autor: severino de souza souza
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// => Conexão com a base de dados:
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Base de dados conectada com sucesso!')
});

module.exports = {
    query: (Text, params) => pool.query(Text, params),
};