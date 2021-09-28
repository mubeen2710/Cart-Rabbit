const controller = require("../controllers/general.controller");

module.exports = function (app) {
    // general routes
  app.get("/api/rooms", controller.all);
  app.get("/api/rooms/:id", controller.individual);
  app.get("/api/ownerDetails/:id", controller.ownerDetails);
  app.post("/api/rooms", controller.book);
  app.get("/api/rooms/avail/:id", controller.avail);
  app.get("/api/rooms/bookings/:id",controller.getBookings)
};
