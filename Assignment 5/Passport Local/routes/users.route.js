const router = require('express').Router();
var passport = require('passport')
var User = require('../model/users.model')
const bodyParser = require('body-parser')
router.use(bodyParser.json())

//route here
router.route('/').get((req, res) => {
    res.send("Welcome to NAVPRAYAS");
});

//signup here
router.post('/signup', (req, res, next) => {
    User.register(new User({email: req.body.email}), 
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    });
  });

//login here
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, status: 'You are successfully logged in!'});
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
