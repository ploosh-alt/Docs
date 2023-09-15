import { createBareServer } from '@tomphttp/bare-server-node';
import { fileURLToPath } from "url";
import http from 'http';
import serveStatic from "serve-static";
import cluster from 'cluster';
import os from 'os';
const cpus = os.cpus().length;

const port = process.env.PORT || 8080;
var data = { live: 0, peak: 0, visits: 0 }
const bare = createBareServer('/bare/');
const serve = serveStatic(fileURLToPath(new URL("./static/", import.meta.url)), { fallthrough: false });
const server = http.createServer();

server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    serve(req, res, (err) => {
      res.writeHead(err?.statusCode || 500, null, {
        "Content-Type": "text/plain"
      });
      res.end(err?.stack);
    });
  }
});

server.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});


if (cluster.isMaster) {
	for (let i = 0; i < cpus; i++) {
		cluster.fork();
	}
	console.log("Server running on port " + port);
}
else {
	server.listen({ port: port, });
}
