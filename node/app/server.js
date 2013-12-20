/*var http = require("http");
var url = require("url");*/
var mongoose = require('mongoose');

var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/lb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('ok');
});

var kittySchema = mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name"
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema)

var silence = new Kitten({ name: 'Silence' })
console.log(silence.name) // 'Silence'

/*var fluffy = new Kitten({ name: 'asdasda' });
fluffy.speak() // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
    // TODO handle the error
    if (err){
        console.log('error');
    }
    fluffy.speak();
});*/
Kitten.find({name: 'fluffy'}, function (err, kittens) {
    if (err){
        console.log('error');
    }
    console.log(kittens)
})



console.log('end');

/*function hendler(request, response) {
    console.log('/');
    mongoose.connect('mongodb://localhost/lb');

    var Cat = mongoose.model('Cat', { name: String });

//            var kitty = new Cat({ name: 'Zildjian' });
//            kitty.save(function (err) {
//                if (err) // ...
//                    console.log('meow');
//            });
    var kats = Cat.find();

    console.log('as');

    response.end();
}
http.createServer(hendler).listen(8888);
console.log('----- Server started -----');*/


