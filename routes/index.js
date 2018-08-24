const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/', (req, res)=>{
    User.find((err, user)=>{
        res.render('index', {
            users: user
        })
    })
});
router.post('/users/add',(req, res)=>{
    var {
        username,
        password
    } = req.body

    let newUser = new User({username, password});

    newUser.save((err, newuser)=>{
        console.log(newuser);
    });
    res.redirect('/');
});

module.exports = router;