const express = require('express');
const router = express.Router();

const lessonsHandler = require('./handler/lessons');

router.post('/', lessonsHandler.create);
router.put('/:id', lessonsHandler.update);

module.exports = router;
