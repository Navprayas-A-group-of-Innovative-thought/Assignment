var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mtseRouter = require('./routes/mtseRoute');
var puzzleRouter = require('./routes/puzzleRoute');
var rangotsavRouter = require('./routes/rangotsavRoute');

const mongoose = require('mongoose')
var mtseSchema = require('./models/mtse')
var puzzleSchema = require('./models/puzzle')
var rangotsavSchema = require('./models/rangotsav')
const url = 'mongodb://localhost:27017/Navprayas';
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

connect.then((db) => {
  console.log("Database connected!!");
}, (err) => {
  console.log(err); 
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/registerExam/MTSE', mtseRouter);
app.use('/registerExam/PuzzleRace', puzzleRouter);
app.use('/registerExam/Rangotsav', rangotsavRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
