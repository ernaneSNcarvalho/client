import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mainRoutes from './routes/api';

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req, res) => {
    res.status(404);
    res.json({error: 'Endpoint not found.'});
});

server.listen(process.env.PORT);