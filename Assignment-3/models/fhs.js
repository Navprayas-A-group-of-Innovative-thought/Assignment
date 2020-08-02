var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var addSchema = new Schema({
    house_no:{
        type:String
    },
    landmark:{
        type:String,
        required:true
    },
    first_line:{
        type:String,
        required:true
    },
    second_line:{
        type:String
    },
    district:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
});

var userSchema = new Schema ({
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
    address:addSchema,
    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

var Navprayas = mongoose.model('FhsUsers',userSchema);

module.exports = Navprayas;
