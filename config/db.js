const { Sequelize } = require("sequelize");

const createDB = new Sequelize("Url", "skysparko", "Url@125", {
  dialect: "sqlite",
  host: "./config/db.sqlite",
});

module.exports = createDB;
