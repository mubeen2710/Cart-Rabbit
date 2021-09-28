const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// creatng tables from model
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.room = require("../models/rooms.model")(sequelize, Sequelize);
db.booking = require("../models/booking.model")(sequelize, Sequelize);
db.ROLES = ["consumer", "admin", "onwer"];
module.exports = db;
