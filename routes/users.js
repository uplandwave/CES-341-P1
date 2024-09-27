const express = require('express');
const router = express.Router();

const usersControler = require('../controllers/users');

router.get( '/', usersControler.getAll);

router.get( '/:id', usersControler.getSingle);
  
router.post( '/', usersControler.createUser);

router.put( '/:id', usersControler.updateUser);

router.delete( '/:id', usersControler.deleteUser);

module.exports = router;