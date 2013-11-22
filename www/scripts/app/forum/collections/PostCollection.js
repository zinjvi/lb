define(['use!backbone', 'scripts/app/forum/models/Post'], function(Backbone, Post){
    var PostCollection = Backbone.Collection.extend({
        model: Post
    });
    return PostCollection;
});
