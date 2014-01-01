var require = require('requirejs');
var express = require('express');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var GroupSchema = require('models/Group');
var CategorySchema = require('models/Category');
var Article = require('models/Article');


var id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');


require.config({
    nodeRequire: require
});

var app = express();
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.configure(function(){
    app.use(express.bodyParser());
});

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

app.get('/api/c', function(req, res){
    var c = new CategorySchema();
});


// ~~~~~~~~~~~~~~~ Groups ~~~~~~~~~~~~~~

app.get('/api/groups', function (req, res) {
    GroupSchema.find({}).populate('categories')
        .exec(function (err, values) {
            if (err) console.log(err);
            res.send(values)
            console.log(values);
        });
});

app.get('/api/groups/:id', function(req, res){
    GroupSchema.findById(req.params.id, function(err, val){
        console.log(err);
        res.send(val);
    })
});

// ~~~~~~~~~~~~~~~ Categories ~~~~~~~~~~~

app.post('/api/categories', function(req, res){
    console.log('/api/categories');
    console.log(req.body);
    req.body._id = null;
    var category = new CategorySchema(req.body);
//    category._id = null;
    category.save(function(err, cat){
        console.log('ctegogy save callback');
        console.log(err);
        console.log(cat);
        res.send();
    });
    console.log('category:');
    console.log(category);
       GroupSchema.findById({_id: category.group}, function(err, group){
           console.log(group);
        group.categories.push(category._id);
        group.save(function(err){
            console.log(err);
        });
       });


});

// ~~~~~~~~~~~~~~~ Article ~~~~~~~~~~~~~~

app.get('/api/articles', function(req, res){
    Article.find(function(err, values){
        if(err) console.log(err);
        res.send(values);
        console.log(values);
    });
});


app.get('/as', function(req, res){
    var a = new Article({
//        _id: new mongoose.Schema.Types.ObjectId(),
        title: "qweqwe",
        description: "descr"
    });
    a.save(function(err){
        console.log("err: " + err);
        res.send("err: " + err);
    });
});

app.get('/af', function(req, res){
    Article.find({}).exec(function(err, val){
        res.send(val);
    });
});

app.get('/afo', function(req, res){
    Article.findById({_id: mongoose.Types.ObjectId('52b7db02cd7299fc21000002')})
        .exec(function(err, val){
        console.log(err)
        res.send(val);
    });
});

app.listen(3000);
