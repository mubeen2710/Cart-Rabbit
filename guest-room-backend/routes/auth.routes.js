const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const upload = require("../config/multer");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
// auth routes
  app.post(
    "/api/auth/signup",
    upload.single("profile"),
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};
