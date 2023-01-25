import { JsonServerRouter } from "json-server";
const server =  JsonServer.create();
const router = JsonServer.router('db.json');
const middlewares = JsonServer.defaults();
const port = process.env.PORT || 288;

server.user(middlewares);
server.user(router);

server.listen(port);