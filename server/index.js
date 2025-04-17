const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const socketHandler = require('./socket');
const ordersRoute = require('./routes/ordersRoute');
const productsRoute = require('./routes/productsRoute');

const app = express();

app.use(cors());

app.use('/api/orders', ordersRoute);
app.use('/api/products', productsRoute);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5000',
        methods: ['GET', 'POST'],
    },
});


socketHandler(io);

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

