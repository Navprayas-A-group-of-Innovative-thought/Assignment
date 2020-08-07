var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./model/users.model');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());