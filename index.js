const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/friends") {
      // res.writeHead(200, {
      //   'Content-Type': 'application/json',
      // });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          id: 1,
          name: "Sir Isaac Newton",
        })
      );
    } else if (req.url === "/messages") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<ul>");
      res.write("<li>Hello Isaac!</li>");
      res.write("<li>What are your thoughts on astronomy?</li>");
      res.write("</ul>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
  
const PORT = 3000;


server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost
