//import everything here
const express = require('express')
const mongoose = require('mongoose')
var passport = require('passport');
var authenticate = require('./authenticate')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
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

app.use(session({                            //Using Sessions
    name: 'session-id',
    secret: 'secretkey771',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
  }))

app.use(passport.initialize())
app.use(passport.session())


//import routing here
const myRoute = require('./routes/users.route.js')

app.use('/api/', myRoute);

//---------------------------------------------------------------------
//Handle request here

function auth(req, res, next) {
    console.log(req.user);

    if (!req.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
          next();
    }
}

app.use(auth)


const port = 5000;

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`))
