// model for rooms table
module.exports = (sequelize, Sequelize) => {
  const Rooms = sequelize.define("rooms", {
    userId: {
      type: Sequelize.INTEGER,
    },
    houseName: {
      type: Sequelize.STRING,
    },
    address1: {
      type: Sequelize.STRING,
    },
    address2: {
      type: Sequelize.STRING,
    },
    address3: {
      type: Sequelize.STRING,
    },
    rooms: {
      type: Sequelize.INTEGER,
    },
    rent: {
      type: Sequelize.INTEGER,
    },
    maxDuration: {
      type: Sequelize.INTEGER,
    },
    image1: {
      type: Sequelize.BLOB("long"),
    },
    image2: {
      type: Sequelize.BLOB("long"),
    },
    image3: {
      type: Sequelize.BLOB("long"),
    },
    wifi: {
      type: Sequelize.BOOLEAN,
    },
    tv: {
      type: Sequelize.BOOLEAN,
    },
    cctv: {
      type: Sequelize.BOOLEAN,
    },
    power: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Rooms;
};
