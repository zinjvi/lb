var mongoose = require('mongoose');
define(function(){
//    var Group = new mongoose.Schema({
//        name: {
//            type: String,
//            required: true
//        }
//    });
    return mongoose.model('Group', {
        name: {
            type: String,
            required: true
        }
    });
});
