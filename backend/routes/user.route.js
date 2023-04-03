const express = require('express');
const { createUser, getUser, loginUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', createUser)

router.post('/login', loginUser)

router.get('/signup', getUser)

module.exports = router;
