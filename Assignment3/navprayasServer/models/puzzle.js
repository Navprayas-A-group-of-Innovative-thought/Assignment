const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema for users
var userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        fatherName: {
            type: String,
            required: true
        },
        motherName: {
            type: String,
            required: true
        },
        class: {
            type: Number,
            required: true
        },
        school: {
            type: String,
            required: false
        },
        phoneNumber: {
            type: Number,
            required:true
        },
        houseNumber: {
            type: String,
            required: true
        },
        landmark: {
            type: String,
            required: false
        },
        firstLine: {
            type: String,
            required: true
        },
        secondLine: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
        identityProof : {
            type: String,
            required: true
        }
    }
)

//Schema for User Registration
var puzzleSchema = new Schema(
    {
        teamName : {
            type: String,
            required: true
        },
        players : [userSchema],
        countPlayers : {
            type: Number,
            default: 2,
            required: true
        }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('puzzle', puzzleSchema)