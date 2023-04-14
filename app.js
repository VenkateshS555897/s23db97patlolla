var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var GrassRouter = require('./routes/grass');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var grass = require("./models/grass");
var resourceRouter = require('./routes/resource');

// We can seed the collection if needed on server start

async function recreateDB(){
// Delete everything
await grass.deleteMany();
  let instance1 = new grass({ Grass_Name: "Kentucky bluegrass", Grass_color: 'Brown', Height: "Big" });
  let instance2 = new grass({ Grass_Name: "Tall Fescue", Grass_color: 'Red', Height: "medium" });
  let instance3 = new grass({ Grass_Name: "Ryegrass", Grass_color: 'Yellow', Height: "small" })

instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)});

instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)});

  instance3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)})
  
}


let reseed = true;
if (reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grass', GrassRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
*/
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
