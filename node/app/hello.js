var mongoose = require('mongoose');
var server = require('./server');
server.start({
    '/':{
        callback: function(request, response){
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



//            var Schema = mongoose.Schema;
//
//            var article = new Schema({
//                '_id': {
//                    'type' :Number,
//                    'required': true
//                },
//                'name': {
//                    'type': String
//                }
//            });
        }
    },
    '/first':{
        callback: function(request, response){
            console.log('/first');
        }
    }
});
