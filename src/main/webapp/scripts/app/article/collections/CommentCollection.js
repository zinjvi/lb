define(['common/collections/BaseCollection',
    'article/models/CommentModel'],
    function(BaseCollection, CommentModel){
        var ArticleCollection = BaseCollection.extend({
            model: CommentModel
        });
        return ArticleCollection;
    });
