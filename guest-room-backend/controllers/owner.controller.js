const { sequelize } = require("../models");
const db = require("../models");
const vt = require("../middleware/authJwt");
const fs = require("fs");
const Room = db.room;

// controller for add a room
exports.add = (req, res) => {
  let ver = vt(req, res);
  Room.create({
    userId: req.userId,
    houseName: req.body.houseName,
    address1: req.body.address1,
    address2: req.body.address2,
    address3: req.body.address3,
    rooms: req.body.rooms,
    rent: req.body.rent,
    maxDuration: req.body.maxDuration,
    image1: fs.readFileSync(__basedir + "/uploads/" + req.files[0].filename),
    image2: fs.readFileSync(__basedir + "/uploads/" + req.files[1].filename),
    image3: fs.readFileSync(__basedir + "/uploads/" + req.files[2].filename),
    wifi: req.body.wifi,
    tv: req.body.tv,
    cctv: req.body.cctv,
    wifi: req.body.wifi,
  })
    .then(() => {
      res.send({ message: "User registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
 exports.getmyrooms=(req,res)=>{
   Room.findAll({where:{userId:req.params.id}}).then((data)=>res.send(data)).catch(err=>res.send(err))
 }