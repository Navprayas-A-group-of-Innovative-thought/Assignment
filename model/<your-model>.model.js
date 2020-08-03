var mongoose = require('mongoose');

var mySchema = new mongoose.Schema({
  
 // name: {
 //   type: String,
 //   required: true,
 //   trim: true,
 // },
 // email: {
 //   type: String,
 //   required: true,
 //   trim: true,
 //   unique: true,
 // },
  
 // password: {
 //   type: String,
 //   required: true
 // }
});

var Model =  mongoose.model('<your-table-name>', mySchema)

module.exports =  User
