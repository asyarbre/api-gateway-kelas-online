const express = require('express');
const router = express.Router();

const myCoursesHandler = require('./handler/my-courses');

router.post('/', myCoursesHandler.create);

module.exports = router;
