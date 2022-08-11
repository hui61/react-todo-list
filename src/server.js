const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/items", function (req, res, next) {
  res.json({ msg: "eeeeee" });
});
app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
