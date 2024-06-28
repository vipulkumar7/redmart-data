const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("products.db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5050; //  choose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);