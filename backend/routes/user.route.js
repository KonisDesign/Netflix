const express = require('express');
const { createUser, getUser, loginUser, updateList } = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', createUser)

router.post('/login', loginUser)

router.get('/signup', getUser)

router.put('/browse', updateList)

module.exports = router;
