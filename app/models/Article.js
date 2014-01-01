define(['mongoose'],
    function (mongoose) {
        var Article = new mongoose.Schema({
//            _id: mongoose.Schema.Types.ObjectId,
            title: {
                type: String,
                require: true
            },
            description: {
                type: String,
                require: true
            }
        });
        return mongoose.model('Article', Article);
    });