const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
require('mongoose');
const navpRouter = express.Router();

navpRouter.use(bodyParser.json());
const usrField = require('../models/form');
navpRouter.route('/')
.get((req,res,next) => {
    usrField.find({})
    .then((users) => {
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(users);
    },(err) => next(err))
    .catch((err) => next(err));
})

.post([ body('name').trim().matches(/^[a-zA-Z ]*$/).withMessage('name should contain only a-z or A-Z'),
        body('class').isInt({min:5,max:10}).withMessage('should be from 5 to 10'),
        body('contact').isMobilePhone('en-IN').withMessage('Invalid phone number'),
        body('pincode').isPostalCode('IN').withMessage('should be 6 digit no.'),
        body('category').isIn(['junior','senior']).withMessage('option should be junior or senior')
    ],(req, res, next) => {
        const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    usrField.create(req.body)
    .then((users) => {
        console.log('Inserted:\n ',users );
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(users);
    },(err) => next(err))
    .catch((err) => next(err));
});


module.exports = navpRouter;