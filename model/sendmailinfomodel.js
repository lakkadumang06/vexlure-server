var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String
    } 
});

module.exports = mongoose.model('sendmailinfo', userschema);