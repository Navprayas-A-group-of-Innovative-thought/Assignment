var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// including Navprayas database ~ starts 
const mongoose = require('mongoose');
const userField = require('../models/createUserSchema');
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
    userField.create(req.body)
    .then((users) => {
        console.log(' inserted ',users );
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
})



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


