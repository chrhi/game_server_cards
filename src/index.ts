import  express , {Express}  from "express"
import { createServer } from 'http';
import { Server } from 'socket.io'; 
import cors from 'cors';

const app:Express = express();

app.get('/', (req, res) => {
    res.json({"the server is working ":"true"})
    console.log("server is working with socket ")
})
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });
io.on('connection', () => { /* … */ });
httpServer.listen(4000, ()=>{
    console.log(`server listening on http://localhost${4000}`)
});
