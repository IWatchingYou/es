const mongoose = require('mongoose');

var Product = mongoose.Schema({
    pro_name: String,
    created_at: {
        type: Date,
        default: +new Date() + 7*24*60*60*1000
    }
});

module.exports = mongoose.model('Product', Product);