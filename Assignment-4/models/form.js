var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:Number,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

var Navprayas = mongoose.model('formValidation',formSchema);
module.exports = Navprayas;