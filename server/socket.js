let activeUsers = 0;

function socketHandler(io) {
  io.on('connection', (socket) => {
    activeUsers++;
    io.emit('activeUsers', activeUsers);

    socket.on('disconnect', () => {
      activeUsers--;
      io.emit('activeUsers', activeUsers);
    });
  });
}

module.exports = socketHandler;
