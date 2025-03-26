var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('sendmail', userschema);