var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var imageSchema = new mongoose.Schema({ 
});

var Navprayas = mongoose.model('image',imageSchema);
module.exports = Navprayas;