var require = require('requirejs');
var express = require('express');
var mongoose = require('mongoose');
var GroupSchema = require('models/Group');
var CategorySchema = require('models/Category');


require.config({
    nodeRequire: require
});

var app = express();
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/lb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('ok');
});


var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var personSchema = Schema({
    _id: Number,
    name: String,
    age: Number,
    stories: [
        { type: Schema.Types.ObjectId, ref: 'Story' }
    ]
});

var storySchema = Schema({
    _creator: { type: Number, ref: 'Person' },
    title: String,
    fans: [
        { type: Number, ref: 'Person' }
    ]
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);

var story1 = new Story({
    title: "Once upon a timex 10.",
    _creator: 0  //aaron._id    // assign the _id from the person
});
story1.save();

Person.findById(0).exec(function(err, value){
    aaron = value;
    aaron.stories.push(story1);
    aaron.save();
});


//var aaron = new Person({ _id: 0, name: 'Aaron', age: 100 });

//aaron.save(function (err) {
//    if (err) return handleError(err);

//    var story1 = new Story({
//        title: "Once upon a timex 3.",
//        _creator: 0  //aaron._id    // assign the _id from the person
//    });
//
//    story1.save(function (err) {
//        if (err) return handleError(err);
//        // thats it!
//    });
//})

//Person
//    .findOne({ name: 'Aaron' })
//    .populate('stories') // only works if we pushed refs to children
//    .exec(function (err, person) {
//        if (err) return handleError(err);
//        console.log(person);
//    })


app.get('/', function (req, res) {
    console.log('/');
    res.render('page.ejs');
});
app.get('/add/:name/:id', function (req, res) {
    console.log('req.params.name: ' + req.params.name);
    var gs = new GroupSchema({
        '_id': req.params.id,
        'name': req.params.name
    });
    gs.save(function (err) {
        console.log('saved, ' + err);
    });
    res.send();
});
app.get('/category/:name/:id/:byId', function (req, res) {
    console.log('req.params.name: ' + req.params.name);
    console.log('req.params.id: ' + req.params.id);
    console.log('req.params.byId: ' + req.params.byId);
    var cs = new CategorySchema({
        '_id': req.params.id,
        'name': req.params.name,
        'group': req.params.byId
    });
    cs.save(function (err) {
        console.log('saved, ' + err);
    });
    res.send();
});

app.get('/api/categories', function (req, res) {
    CategorySchema.find({}).populate('group')
        .exec(function (err, values) {
            if (err) res.send(err);
            res.send(values)
        });
});

app.get('/api/groups', function (req, res) {
    GroupSchema.find({}).populate('categories')
        .exec(function (err, values) {
            if (err) res.send(err);
            res.send(values)
            console.log(values);
        });
});

app.listen(3000);
