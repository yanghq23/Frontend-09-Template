const http = require("http");

http
  .createServer((repuest, response) => {
    let body = [];
    repuest
      .on("error", (error) => {
        console.log(error);
      })
      .on("data", (chunk) => {
        body.push(chunk.toString());
      })
      .on("end", () => {
        // body = Buffer.concat(body);
        body = body.join("");
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(`
					<html>
							<head d=c a='dd'></head>
							<style>
									body div.q {
											background: red;
									}
							</style>
							<body>
									<div class='q a'></div>
							</body>
					</html>
        `);
      });
  })
  .listen(8088, "127.0.0.1");

console.log("server started on 127.0.0.1:8088");
