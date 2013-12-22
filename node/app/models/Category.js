define(['mongoose', 'models/Group'],
    function (mongoose, Group) {
        var Category = new mongoose.Schema({
            _id: Number,
            name: {
                type: String,
                require: true
            },
            group: {
                type: Number,
                ref: 'Group'
            }
        });
        return mongoose.model('Category', Category);
    });



