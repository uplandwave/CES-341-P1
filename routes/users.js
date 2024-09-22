const express = require('express');
const router = express.Router();

const usersControler = require('../controllers/users');

router.get( '/', usersControler.getAll);

router.get( '/:id', usersControler.getSingle);

module.exports = router;