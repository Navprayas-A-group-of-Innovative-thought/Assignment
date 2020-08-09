const router = require('express').Router();
const mongoose = require('mongoose')
var passport = require('passport')
const bcrypt = require('bcrypt')
var user = require('../model/users.model')
const session = require('express-session')
const bodyParser = require('body-parser')
router.use(bodyParser.json())

//route here
router.route('/').get((req, res) => {
    res.send("Welcome to NAVPRAYAS");
});

//signup here
router.post('/signup', (req, res) => {
  var { firstName, lastName, email, password } = req.body;
  var err;
  if ( !firstName || !lastName || !email || !password) {
      err = "Please Fill All The Fields...";
      res.json({success: false, status: err});
  }
  if (typeof err == 'undefined') {
      user.findOne({ email: email }, function (err, data) {
          if (err) throw err;
          if (data) {
              console.log("User Exists");
              err = "User Already Exists With This Email...";
              res.json({success: false, status: err});
          } else {
              bcrypt.genSalt(10, (err, salt) => {
                  if (err) throw err;
                  bcrypt.hash(password, salt, (err, hash) => {
                      if (err) throw err;
                      password = hash;
                    user({
                          firstName,
                          lastName,
                          email,
                          password,
                      }).save((err, data) => {
                          if (err) throw err;
                          res.json({success: true, status: 'Successfully signed up'});
                      });
                  });
              });
          }
      });
  }
});

//login here
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, status: 'You are successfully logged in'});
  });

//logout here
router.get('/logout', (req,res) => {
    if (req.session) {
      req.session.destroy()
      res.clearCookie('session-id')
      res.json({success: true, status: 'You have been logged out!'})
    } else {
      var err = new Err('You are not logged in!')
      err.status = 403
      next(err)
    }
  })  

module.exports = router
