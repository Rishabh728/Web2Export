require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DIALECT,
  },
  "test": {
    "username": process.env.test_USER,
    "password": process.env.test_PASSWORD,
    "database": process.env.test_DATABASE,
    "host": process.env.test_HOST,
    "dialect": process.env.DIALECT,
  },
  "production": {
    "username": process.env.PRODUCTION_USER,
    "password": process.env.PRODUCTION_PASSWORD,
    "database": process.env.PRODUCTION_DATABASE,
    "host": process.env.PRODUCTION_HOST,
    "dialect": process.env.DIALECT,
  },
};
