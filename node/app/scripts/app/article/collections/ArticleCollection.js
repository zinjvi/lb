define(['common/collections/BaseCollection',
    'article/models/ArticleModel'],
    function(BaseCollection, ArticleModel){
        var ArticleCollection = BaseCollection.extend({
            model: ArticleModel,
            fetchByCategoryId: function(categoryId){
                this.fetch({
                    async: false,
                    url: 'article/articlesByCategoryId/'+categoryId
                })
            }
        });
        return ArticleCollection;
    });
