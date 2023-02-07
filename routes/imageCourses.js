const express = require('express');
const router = express.Router();

const imageCourseHandler = require('./handler/image-courses');

router.post('/', imageCourseHandler.create);

module.exports = router;
