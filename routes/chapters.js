const express = require('express');
const router = express.Router();

const chaptersHandler = require('./handler/chapters');

router.post('/', chaptersHandler.create);

module.exports = router;
