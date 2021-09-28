const express = require("express");
const db = require("./models");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.routes");
const onwerRoutes = require("./routes/onwer.routes");
const generalRoutes = require("./routes/general.routes");
const cors = require("cors");

global.__basedir = __dirname;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

db.sequelize.sync();

authRoutes(app);
onwerRoutes(app);
generalRoutes(app);
let port = 4000;
app.listen(4000, () => {
  console.log(`server started at ${port}`);
});


