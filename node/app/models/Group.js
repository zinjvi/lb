define(['mongoose', 'models/Category'],
    function(mongoose, Category){
//    var Group = new mongoose.Schema({
//        name: {
//            type: String,
//            required: true
//        }
//    });
    return mongoose.model('Group', {
        _id: Number,
        name: {
            type: String,
            required: true
        },
        categories: [{
            type: Number, ref: 'Group'
        }]
    });
});
