/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a config e execução do back-End.
 * autor: severino de souza souza
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta: ', port);
});