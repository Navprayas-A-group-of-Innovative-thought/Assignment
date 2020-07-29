const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
require('mongoose-type-email')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    email:{
        type : mongoose.SchemaTypes.Email,
        required: true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
    isAdmin:{
        type : Boolean,
        default : false
    },
    isMember:{
        type : Boolean,
        default : false
    },
    isVolunteer:{
        type : Boolean,
        default : false
    },
    isGeneral:{
        type : Boolean,
        default : false
    },
    isParent:{
        type : Boolean,
        default : false
    }
},{
        timestamps: true
    }

);

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch)
    })
};
userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Navprayas', userSchema)