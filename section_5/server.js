/* eslint-disable */
// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log("This is first middleware");
//   next(); // next is also a function - allows the request to move to the next middleware
// }); // use allows us to add new middleware functions - accepts an array of request handlers

app.use("/add-product", (req, res, next) => {
  // console.log("This is the Product Page");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // console.log("This is second middleware");
  res.send("<h1> Hi, this is my website </h1>"); // this allows us to send a response back
});

// const server = http.createServer(app);
// server.listen(5000);

app.listen(5000); // this will do the same as the above two lines
