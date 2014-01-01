define(['mongoose', 'models/Category'],
    function(mongoose, Category){
    return mongoose.model('Group', {
        _id: Number,
        name: {
            type: String,
            required: true
        },
        categories: [{
            type: mongoose.Schema.ObjectId, ref: 'Category'
        }]
    });
});
