var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()

const mongoose = require('mongoose')
const rangotsavField = require('../models/rangotsav')
router.use(bodyParser.json())

router.route('/')

.get((req,res,next) => {
    rangotsavField.find({})
    .then((users) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.json(users)
    }, (err) => next(err))
    .catch((err) => next(err))
})

.post((req, res, next) => {
    rangotsavField.create(req.body)
    .then((users) => {
        console.log(' Inserted succesfully: ',users )
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(users)
    }, (err) => next(err))
    .catch((err) => next(err))
})

.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /register')
})

// remove all user info at once
.delete((req, res, next) => {
    rangotsavField.remove({})
    .then((resp) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(resp)
    }, (err) => next(err))
    .catch((err) => next(err))
})

module.exports = router