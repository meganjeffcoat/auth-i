const express = require("express");

const knex = require("knex");
const router = express.Router();
const bcrypt = require("bcryptjs");
const knexConfig = require("../knexfile.js");

const db = require('../data/dbConfig.js');
const Users = require('../users/users-module.js');

router.get('/', (req, res) => {
    res.send('A long time ago in a galaxy far, far away....');
});

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 15);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials '});
            }
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

  module.exports = router;