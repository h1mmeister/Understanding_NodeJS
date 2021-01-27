/* eslint-disable */
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method); // with request, we can check the url, method and the headers like req.url, req.method and req.headers
  // process.exit() // it hard exits the event loop
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html"); // this will set the response header
  res.write("<html>");
  res.write("<body> <h1> Hi from the Server! </h1> </body>");
  res.write("</html>");
  res.end();
}); // createServer takes requestListener as an argrument. requestListener is a function that runs/execute for each incoming requests.

server.listen(5000);
