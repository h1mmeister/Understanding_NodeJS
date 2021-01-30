/* eslint-disable */
const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes);
// console.log(req.url, req.method); // with request, we can check the url, method and the headers like req.url, req.method and req.headers
// process.exit() // it hard exits the event loop
// createServer takes requestListener as an argrument. requestListener is a function that runs/execute for each incoming requests.

server.listen(5000);
