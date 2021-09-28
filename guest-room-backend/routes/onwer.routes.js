const controller = require("../controllers/owner.controller");
const upload = require("../config/multer");
module.exports = function (app) {
  // onwer routes
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/owner/add", upload.array("image", 3), controller.add);
  app.get("/api/owner/:id",controller.getmyrooms)
};
