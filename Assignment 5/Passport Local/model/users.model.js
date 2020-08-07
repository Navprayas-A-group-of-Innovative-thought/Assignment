var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose')

var mySchema = new mongoose.Schema({

    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName : {
    //     type: String,
    //     required: true
    // }
});

mySchema.plugin(passportLocalMongoose, {
    usernameField: "email"
})

module.exports = mongoose.model('users.model', mySchema)
