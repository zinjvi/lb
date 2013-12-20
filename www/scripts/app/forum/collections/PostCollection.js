define(['common/collections/BaseCollection', 'forum/models/PostModel'],
    function(BaseCollection, PostModel){
    var Collection = Backbone.Collection.extend({
        model: PostModel,
        url: '/forum/posts',
        initialize: function(){
            this.fetch({async:false});
        }
    });
    return Collection;
});
