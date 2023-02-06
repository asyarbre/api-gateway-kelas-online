const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);
 
 module.exports = router;
