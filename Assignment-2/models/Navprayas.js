const mongoose = require('mongoose');
require('mongoose-unique-validator');
const mongooseUniqueValidator = require('mongoose-unique-validator');
require('mongoose-type-email');
bcrypt = require('bcryptjs'),
SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:mongoose.SchemaTypes.Email,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isMember:{
        type:Boolean,
        default:false
    },
    isVolunteer:{
        type:Boolean,
        default:false
    },
    isGeneral:{
        type:Boolean,
        default:true
    },
    isParent:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});

userSchema.pre('save', function(next) {
    var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});

userSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
userSchema.plugin(mongooseUniqueValidator);
var Navprayas = mongoose.model('Users',userSchema);

module.exports = Navprayas;