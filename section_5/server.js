/* eslint-disable */
// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("This is first middleware");
//   next(); // next is also a function - allows the request to move to the next middleware
// }); // use allows us to add new middleware functions - accepts an array of request handlers

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(5000);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000); // this will do the same as the above two lines
