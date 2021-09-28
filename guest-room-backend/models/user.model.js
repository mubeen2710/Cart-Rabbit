// model for users table
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.BIGINT,
    },
    name: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    profile: {
      type: Sequelize.BLOB("long"),
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
