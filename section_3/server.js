/* eslint-disable */
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method); // with request, we can check the url, method and the headers like req.url, req.method and req.headers
  // process.exit() // it hard exits the event loop
  res.setHeader("Content-Type", "text/html"); // this will set the response header
  res.write("<html>");
  res.write("<body> <h1> Hi from the Server! </h1> </body>");
  res.write("</html>");
  res.end();
}); // createServer takes requestListener as an argrument. requestListener is a function that runs/execute for each incoming requests.

server.listen(5000);
