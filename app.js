var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var product = require('./routes/product.route');

var mongoose = require('mongoose');
var db_url = 'mongodb://intsuki:passw0rd@ds039231.mlab.com:39231/u181112';
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

app.listen('4242', function(){
    console.log('Server up');
});