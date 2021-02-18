# CRUD-Back-End-NodeJs-PostgreSQL
> CRUD com Node.js & PostgreSQL com enfoque no Back-End.
> Este projeto tem como principal objetivo criar uma API RESTful e que no final deve ser persistada no PostgreSQL.

## githud
> criar um repositório no github.
> clonar repositório.

## VsCode
> carregar repositório.
> gerar arquivo .editorconfig.

## terminal (OBS: Não realizar nenhuma adição arquivo "package.json com o mesmo aberto)
> criar arquivo package.json.
> npm init -y

## https://eslint.org/
> instalar ESlint
> npx eslint --init
> To check syntax and find problems 
    > JavaScript modules (import/export)
        > None of these
            > Does your project use TypeScript? » No / Yes : No
                > Node
                    > JSON
                        > Would you like to install them now with npm? » No / Yes: Yes

## VsCode
> criar arquivo .gitignore.

## PgAdmin - PostgreSQL
> criar database.
>criar tabela
    > usando a UUID no postgresql

    > https://nandovieira.com.br/usando-uuid-no-postgresql-com-activerecord#:~:text=No%20PostgreSQL%2C%20voc%C3%AA%20pode%20utilizar,colunas%20com%20o%20tipo%20uuid.
   
   > CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; (ativar uuid)
   > id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), (acrescentado a tabela)

## Terminal (OBS: Não realizar nenhuma adição arquivo "package.json com o mesmo aberto)
> Instalar pacotes adcionais no projeto.
> npm i --save-dev husky
> npm i --save-dev nodemon
> npm i cors
> npm i dotenv
> npm install express --save
> npm i express-promise-router
> npm i pg