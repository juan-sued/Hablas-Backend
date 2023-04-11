import { io } from './Http';

interface RoomUser {
  socket_id: string;
  username: string;
  room: string;
}

const users: RoomUser[] = [];

io.on('connection', socket => {
  socket.on('selected_room', data => {
    console.log('data:', data);

    users.push({
      socket_id: socket.id,
      username: data.username,
      room: data.room
    });

    io.emit('message', data);
  });

  socket.on('message', data => {
    console.log('data:', data);

    users.push({
      socket_id: socket.id,
      username: data.username,
      room: data.room
    });

    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});
