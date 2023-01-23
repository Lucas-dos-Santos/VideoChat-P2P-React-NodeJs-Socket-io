const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  socket.emit('user', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });

	socket.on('callUser', ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit('callUser', { signal: signalData, from, name });
	});

  socket.on('answerCall', ({ to, signal, callerName }) => {
    io.to(to).emit('callAccepted', { signal, callerName });
  });
})

server.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));