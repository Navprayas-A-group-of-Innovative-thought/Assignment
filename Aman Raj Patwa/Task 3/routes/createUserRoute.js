var express = require('express');
var bodyParser = require('body-parser');
const cryptoRandomString = require('crypto-random-string');
var nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const userField = require('../models/createUserSchema');


var router = express.Router();
router.use(bodyParser.json());

router.route('/')

// Return all the users info stored in database 
.get((req,res,next) => {
    userField.find({})
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
})

// insert into the database
.post((req, res, next) => {

/* 
    //--------- uncomment  ---- single user  
    mail_ = req.body.email;
    console.log(mail_);
    password_ = cryptoRandomString({length: 10, type: 'base64'});
    req.body.password = password_ ;
    console.log(req.body.password);
*/

   console.log(typeof req.body);

// ------------ assigning random password for every user ~ starts
  var temp = JSON.parse(JSON.stringify(req.body));
  for(var i = temp.length-1 ;i>=0;i--)
  {
    temp[i].password = cryptoRandomString({length: 6, type: 'base64'});
    console.log(temp[i].email , temp[i].password);
  }
//    ------------ assigning random password for every user ~ ends 

  console.log(typeof temp);

    userField.create(temp)
    .then((users) => {

      console.log(' inserted ',users );
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);

// ------- nodeMailer ~ starts       
      for(var i = temp.length-1 ;i>=0;i--)
      {

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'palubalu123@gmail.com',      // replace with the navprayas official email id
            pass: 'amanpalu0071'                // replace with corresponding email password
          }
        });
        
        var mailOptions = {
          from: 'palubalu123@gmail.com',           // replace with the navprayas official email id
          to: temp[i].email,                       //   refers to every email we have pushed in database 
          subject: 'Sending Email using Node.js',  
          text: temp[i].password                    // refers to randomly generated password for the particular email id.
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        console.log(temp[i].email , temp[i].password);
      }
// ------------- nodeMailer ~ends 

    }, (err) => next(err))
    .catch((err) => next(err)); 
} )


 //it can be used to file list of member | volunteer | general
.put((req, res, next) => {
    userField.find({"type.isVolunteer":true})
    .then((found) => {
        console.log(' inserted ',found );
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
})

// remove all user info at once
.delete((req, res, next) => {
    userField.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

module.exports = router;


