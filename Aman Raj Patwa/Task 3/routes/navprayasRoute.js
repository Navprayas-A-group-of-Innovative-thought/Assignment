var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// including Navprayas database ~ starts 
const mongoose = require('mongoose');
const userField = require('../models/Navprayas');
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

// currently not in work
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /');
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


