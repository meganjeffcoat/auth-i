const express = require("express");

const knex = require("knex");
const router = express.Router();
const bcrypt = require("bcryptjs");
const knexConfig = require("../knexfile.js");
const session = require('express-session');

const sessionConfig = {
    name: 'dog',
    secret: 'w.o.o.f.',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
};

const db = require('../data/dbConfig.js');
const Users = require('../users/users-module.js');


router.use(session(sessionConfig));

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
                req.session.user = user;
                res.status(200).json({ message: `Welcome ${user.username}` });
            } else {
                res.status(401).json({ message: 'Invalid Credentials '});
            }
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

function restricted(req, res, next) {
    const { username, password } = req.headers;
    if (username && password) {
    
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'You shall not pass' });
        })   
    } else {
        res.status(400).json({ message: 'Please login or register to continue' })
    }
}

router.get('/users',restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

  module.exports = router;