import express from "express";
import http from "http";
import socket from "socket.io";
const app = express();
app.get('/', (req, res) => {
    res.json({ "the server is working ": "true" });
    console.log("server is working with socket ");
});
const server = http.createServer(app);
const io = socket(server);
io.on('connection', () => { });
server.listen(4000);
