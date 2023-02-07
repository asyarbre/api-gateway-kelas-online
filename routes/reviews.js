const express = require('express');
const router = express.Router();

const reviwsHandler = require('./handler/reviews');

router.post('/', reviwsHandler.create);
router.put('/:id', reviwsHandler.update);

module.exports = router;
