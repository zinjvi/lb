var require = require('requirejs');
var express = require('express');
var mongoose = require('mongoose');

require.config({
    nodeRequire: require
});

var app = express();

var db = mongoose.connection;
mongoose.connect('mongodb://localhost/lb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('ok');
});

app.get('/', function(req, res){
    console.log('/');

});

app.get('/api/categories', function(req, res){
    console.log('get - /api/categories');
    res.send({
        'id':1,
        'name': 'asdasd'
    });
});
app.get('/api/categories/:id', function(req, res){
    console.log('get - /api/categories/'+req.params.id);
    res.send();

});
app.post('/api/categories', function(req, res){
    console.log('post - /api/categories');
    res.send();

});

app.listen(3000);
