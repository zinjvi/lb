define(['use!backbone', 'forum/models/PostModel'],
    function(Backbone, PostModel){
    var PostCollection = Backbone.Collection.extend({
        model: PostModel,
        initialize: function(){
            this.add({'title': 'tt 01'});
            this.add({'title': 'tt 02'});
        }
    });
    return PostCollection;
});
