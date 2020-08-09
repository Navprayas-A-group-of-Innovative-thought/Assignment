//import everything here
const express = require('express')
const mongoose = require('mongoose')
var passport = require('passport');
var authenticate = require('./authenticate')
var session = require('express-session')
var User = require('./model/users.model')

//for cross origin resource sharing
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
//---------------------------------------------------------------------
// database 
mongoose.connect('mongodb://localhost:27017/Navprayas-ashutoshkrris', {
    useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true
});

const connection = mongoose.connection;
connection.once('open', ()=>console.log("database connected"));
//---------------------------------------------------------------------

app.use(session({
  secret: 'secretkey771',
  maxAge: 3600000,
  saveUninitialized: false,
  resave: false,
  }))

app.use(passport.initialize())
app.use(passport.session())


//import routing here
const myRoute = require('./routes/users.route.js')

app.use('/api/', myRoute);

//---------------------------------------------------------------------
//Handle request here

const checkAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
      res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
      return next();
  } else {
      res.redirect('/login');
  }
}

app.use(checkAuthenticated)

const port = 5000;

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`))
