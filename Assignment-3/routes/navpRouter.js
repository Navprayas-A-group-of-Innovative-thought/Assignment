const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const navpRouter = express.Router();

navpRouter.use(bodyParser.json());
const usrField = require('../models/fhs');
navpRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    next();
})
.get((req,res,next) => {
    usrField.find({})
    .then((users) => {
        res.json(users);
    },(err) => next(err))
    .catch((err) => next(err));
})

.post((req, res, next) => {
    usrField.create(req.body)
    .then((users) => {
        console.log('Inserted:\n ',users );
        res.json(users);
    },(err) => next(err))
    .catch((err) => next(err));
})

module.exports = navpRouter;