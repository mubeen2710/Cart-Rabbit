// model for booking table
module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define("booking", {
    from: {
      type: Sequelize.DATE,
    },
    to: {
      type: Sequelize.DATE,
    },
    total: {
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    roomId: {
      type: Sequelize.INTEGER,
    },
    bstatus: {
      type: Sequelize.STRING,
    }
  });
  return Booking;
};
