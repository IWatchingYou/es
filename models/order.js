const mongoose = require('mongoose');

var Order = mongoose.Schema({
    cus_po: Number,
    customer: String,
    employee: String,
    created_at: {
        type: Date,
        default: +new Date() + 7*24*60*60*1000
    }
});

module.exports = mongoose.model('Order', Order);