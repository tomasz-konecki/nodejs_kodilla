var http = require("http");

var server = http.createServer((req, res) => {
  console.log(req.method);
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write("<h2 style='color: blue'>Server running...</h2>");
  res.write("<img src='./node.png' />");
  res.end();
});

// server.on("request", (req, res) => {
//   console.log("request has been sent");
//   console.log(req.url);
// });

server.listen(9000);
