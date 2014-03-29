define(['common/collections/BaseCollection',
    'article/models/CommentModel'],
    function(BaseCollection, CommentModel){
        var ArticleCollection = BaseCollection.extend({
            model: CommentModel,
            initialize: function(){
                BaseCollection.prototype.initialize.call(this);
            }
        });
        return ArticleCollection;
    });
