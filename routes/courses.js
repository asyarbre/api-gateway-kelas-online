const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');

const verifyToken = require('../middlewares/verifyToken');

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);

router.post('/',verifyToken, coursesHandler.create);
router.put('/:id',verifyToken, coursesHandler.update);

module.exports = router;
