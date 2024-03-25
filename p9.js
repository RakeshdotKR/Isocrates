const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //console.log(req);

  //Routing
  let path = "./assets/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      break;
    case '/aboutus':
        res.statusCode = 301;
        res.setHeader('Location','/about');
        res.end();
      break;
    default:
      path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //console.log("Error exists but still Im executing");
      res.write(data);
      res.end();
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
