const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const navpRouter = express.Router();
const fs = require('fs'); 
var path = require('path'); 
var multer = require('multer'); 

navpRouter.use(bodyParser.json());
const { db } = require('../models/hritik.model');


var storage = multer.diskStorage({ 
    destination: (req,file,cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) 
    } 
}); 
  
var upload = multer({limits:{fileSize:500000},storage: storage });

navpRouter.route('/')
.get((req, res,next) => { 
    imgModel.find({}, (err, items) => { 
        if (err) { 
            console.log(err); 
        } 
        else { 
            res.json(items); 
        } 
    },(err) => next(err)); 
})

.post(upload.single('image'),(req, res, next) => {
    const file = req.file;

    if(!file){
        const error = new Error('Please upload a file');
        error.statusCode = 500;
        return next(error);
    }
    else if(file>500000)
    {
        const error = new Error('too large file');
        err.statusCode = 500;
        return next(error);
    }
    res.send(file);
    var img = fs.readFileSync(req.file.path);

    var encode_image =img.toString('base64');

    var finalImg = {
        image:new Buffer(encode_image,'base64'),
        contentType:req.file.mimetype,
        size:req.file.size,
        path:req.file.path,
        description:req.body.description
    };

    db.collection('image').insertOne(finalImg,(err,result) => {

        if(err) return console.log(err);

        console.log('Saved to Database');
    });

});

module.exports = navpRouter;