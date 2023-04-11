import express, { json } from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(json());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }
});

export { serverHttp, io };
