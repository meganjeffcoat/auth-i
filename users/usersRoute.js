const express = require("express");

const knex = require("knex");
const router = express.Router();
const bcrypt = require("bcryptjs");
const knexConfig = require("../knexfile.js");

const db = require('../data/dbConfig.js');
const Users = require('../users/users-module.js');

router.get('/', (req, res) => {
    res.send('Its alive!');
});

  module.exports = router;