require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var bodyParser = require('body-parser');
var debug = require('debug')('wryter:server');

// TODO: I really don't like this global use of fetch but the Unsplash SDK needs it. Might be a better wat to include it.
global.fetch = require('node-fetch');

var User = require('./app/user/userModel');


var indexRouter = require('./app/index/indexRouter');
var unsplashRouter = require('./app/unsplash/unsplashRouter');
var authRouter = require('./app/auth/authRouter');
var authMiddleware = require('./app/auth/authMiddleware');
var writingsRouter = require('./routes/writingRoute');


var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET || 'warytersecret';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(opts.secretOrKey));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  User.findOne({username: jwt_payload.sub}, function(err, user) {
    if (err) {
        return done(err, false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
  });
}));

app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authMiddleware);


app.use(staticMiddleware);
app.use(history());
app.use('/api/writings', writingsRouter)
app.use('/api/unsplash', unsplashRouter);
app.use('/api/auth', authRouter);
app.use(staticMiddleware);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  debug(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
