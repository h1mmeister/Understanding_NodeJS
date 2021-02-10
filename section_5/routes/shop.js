const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log("This is second middleware");
  // res.send("<h1> Hi, this is my website </h1>"); // this allows us to send a response back
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
