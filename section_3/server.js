/* eslint-disable */
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
}); // createServer takes requestListener as an argrument. requestListener is a function that runs/execute for each incoming requests.

server.listen(5000);
