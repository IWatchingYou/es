const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const Employee = require('../models/employee');
const Product = require('../models/product');
const Order = require('../models/order');
const OrderDetail = require('../models/order_detail');
const User = require('../models/userModel');
const mongooes = require('mongoose');

router.get('/', (req, res)=>{
    // let cus = Customer.find((err, c)=>{
    //     res.send(JSON.stringify(c));
    // });

    // let emp = Employee.find((err, e)=>{
    //     res.send(JSON.stringify(e));
    // });

    // let pro = Product.find((err, p)=>{
    //     res.send(JSON.stringify(p));
    // });

    Order.find((err, o)=>{
        res.render('workorder', {
            orders: o
        })
    })
});

router.post('/add', (req, res)=>{
    var {
        cus_po,
        job_no,
        customer,
        employee,
        product,
        qty,
        substance,
        model,
        lenght,
        width,
        height
    } = req.body;


    Order.findOne({cus_po: cus_po}).then(o=>{
        if(!o){
            let newOrder = new Order({cus_po, customer, employee});
            let newOrderDetial = new OrderDetail({cus_po, job_no, product, qty, substance, model, lenght, width, height});

            newOrder.save();
            newOrderDetial.save();
        }
        else{
            let newOrderDetial = new OrderDetail({cus_po, job_no, product, qty, substance, model, lenght, width, height});

            newOrderDetial.save();
        }
    });
});

module.exports = router;