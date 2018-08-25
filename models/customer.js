const mongoose = require('mongoose');

var Customer = mongoose.Schema({
    cus_name: String,
    gender: String,
    phone: String,
    email: String,
    created_at: {
        type: Date,
        default: +new Date() + 7*24*60*60*1000
    }
});

module.exports = mongoose.model('Customer', Customer);