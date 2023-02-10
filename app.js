require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const orderPaymentsOrder = require('./routes/ordersPayments');
const refreshTokensTokensRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const imageCourseRouter = require('./routes/imageCourses');
const myCoursesRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/reviews');
const webhookRouter = require('./routes/webhook');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/media', mediaRouter);
app.use('/orders', verifyToken, orderPaymentsOrder);
app.use('/refresh-tokens', refreshTokensTokensRouter);
app.use('/mentors', verifyToken, mentorsRouter);
app.use('/chapters',verifyToken, chaptersRouter);
app.use('/lessons', verifyToken, lessonsRouter);
app.use('/image-courses', verifyToken, imageCourseRouter);
app.use('/my-courses', verifyToken, myCoursesRouter);
app.use('/reviews', verifyToken, reviewsRouter);
app.use('/webhook', webhookRouter);

module.exports = app;
