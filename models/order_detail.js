const mongoose = require('mongoose');

var OrderDetail = mongoose.Schema({
    cus_po: Number,
    job_no: Number,
    substance: String,
    model: String,
    product: String,
    qty: Number,
    lenght: Number,
    width: Number,
    height: Number,
});

module.exports = mongoose.model('OrderDetail', OrderDetail);