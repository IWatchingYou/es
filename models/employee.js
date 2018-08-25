const mongoose = require('mongoose');

var Employee = mongoose.Schema({
    emp_name: String,
    gender: String,
    phone: String,
    created_at: {
        type: Date,
        default: +new Date() + 7*24*60*60*1000
    }
});

module.exports = mongoose.model('Employee', Employee);