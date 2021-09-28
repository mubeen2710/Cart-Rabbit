const db = require("../models");
const Room = db.room;
const User = db.user;
const Booking = db.booking;
const vt = require("../middleware/authJwt");
const { sequelize } = require("../models");

exports.all = (req, res) => {
  // for see all recrds from room
  Room.findAll().then((data) => res.send(data));
};
exports.individual = (req, res) => {
  // for see a specific room
  Room.findByPk(req.params.id).then((data) => res.send(data));
};
exports.ownerDetails = (req, res) => {
  // to get room owner details
  User.findByPk(req.params.id).then((data) => res.send(data));
};
exports.book = (req, res) => {
  // controller for book a room
  let ver = vt(req, res);
  console.log(req.userId);
  Booking.create({
    from: req.body.from,
    to: req.body.to,
    userId: req.userId,
    roomId: req.body.roomId,
    bstatus: "booked",
  })
    .then()
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.avail = (req, res) => {
  // controller for check availability
  Booking.findAll({ where: { roomId: req.params.id } }).then((data) =>
    res.send(data)
  );
};

exports.getBookings = (req, res) => {
  Booking.findAll({where:{userId:req.params.id}}).then(data=>res.send(data)).catch(err=>res.send(err))
  // sequelize
  //   .query(
  //     `select * from bookings inner join rooms on bookings.roomId=rooms.id having bookings.userId=${req.params.id}`)
  //   .then((data) => res.send(data))
  //   .catch((err) => {
  //     res.status(500).send({ message: err.message });
  //   });
};
