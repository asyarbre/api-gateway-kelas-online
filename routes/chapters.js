const express = require('express');
const router = express.Router();

const chaptersHandler = require('./handler/chapters');

router.post('/', chaptersHandler.create);
router.put('/:id', chaptersHandler.update);

module.exports = router;
