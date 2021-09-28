// database configuration
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "9809177092",
  DB: "rooms",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
