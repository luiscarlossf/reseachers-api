require('dotenv-safe').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var v1Router = require('./routes/v1');
var mongoose = require('mongoose');
var passport = require('./controllers/authController').passport;
var app = express();



//Configura a conexão padrão do mongoose
var mongoDB = 'mongodb://myTester:lgptest2020@127.0.0.1:27017/?authSource=test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Obtém a conexão padrão
var db = mongoose.connection;

//Vincula a conexão ao evento de erros (para obter notificações de erros da conexão)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/v1', v1Router);

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
