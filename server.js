const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/esdb', {useNewUrlParser: true});
var db = mongoose.connection;
const path = require('path');
const handleBar = require('express-handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//set view engine handlebar
app.set('view engine', 'handlebars');

app.engine('handlebars', handleBar({
    defaultLayout: 'index'
}));


const port = process.env.port || 3000;

var User = require('./routes/user');
var Index = require('./routes/index');

app.use('/user', User);
app.use('/', Index);

app.listen(port,() => console.log(`app is listening on port ${port}`));