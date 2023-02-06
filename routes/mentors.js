const express = require('express');
const router = express.Router();

const mentorsHandler = require('./handler/mentors');

router.post('/', mentorsHandler.create);

module.exports = router;
