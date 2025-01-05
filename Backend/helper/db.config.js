const { Sequelize } = require("sequelize");
const mysql = require("mysql2");

//create Database if does not exists
const createDB = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.warningStatus == 0) {
        console.log("Database created successfully");
      }
    }
  );

  connection.end();
};

createDB();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
  }
);

module.exports = sequelize;
