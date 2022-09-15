const promise = require('bluebird')
require("dotenv").config();

const initOptions = {
  promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 30
}

const db = pgp(cn);

const initializeDB = async() => {
    db.any(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        product_id INTEGER NOT NULL,
        rating  INTEGER NOT NULL,
        date VARCHAR(50) NOT NULL,
        summary VARCHAR(250) NOT NULL,
        body VARCHAR(1000),
        recommend BOOLEAN,
        reported BOOLEAN,
        reviewer_name VARCHAR(250),
        reviewer_email VARCHAR(250),
        response VARCHAR(250),
        helpfulness INTEGER
      );

      CREATE TABLE IF NOT EXISTS photos (
        id SERIAL PRIMARY KEY,
        review_id INTEGER NOT NULL REFERENCES reviews(id),
        url VARCHAR(250) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS characteristics (
        id SERIAL PRIMARY KEY,
        characteristic_id INTEGER NOT NULL,
        review_id INTEGER NOT NULL REFERENCES reviews(id),
        value INTEGER NOT NULL
      );
      `)
};

initializeDB();