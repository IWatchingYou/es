const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/users', (req, res)=>{
    User
    .find()
    .then(ren => {
        res.status(200).send({
            count: ren.length,
            renders : ren
        })
    })
    .catch(err => {
        ren.status(400).send({
            msg: err
        })
    })
});

router.post('/user', (req, res)=>{
    var {
        username,
        password
    } = req.body;

    let newUser = new User({username, password});

    newUser.save((err, newUser) => {
        console.log(newUser);
    });
});

router.put('/user/:id', (req, res)=>{
    var {
        username,
        password
    } = req.body;

    User.update({_id: req.params.id}, { $set: { username, password } })
});

router.delete('/user/:id', (req, res)=>{
    User.remove({_id: req.params.id})
    .then(ren => {
        res.status(200).send({
            count: ren.length,
            renders : ren
        })
    })
})

module.exports = router;