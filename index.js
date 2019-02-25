const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const db = require('./data/dbConfig.js');
const usersRoutes = require('./users/usersRoute.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', usersRoutes);



const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
