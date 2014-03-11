define(['common/collections/BaseCollection',
    'article/models/ArticleModel'],
    function(BaseCollection, ArticleModel){
        var ArticleCollection = BaseCollection.extend({
            model: ArticleModel,
            fetchByCategoryId: function(categoryId){
                this.fetch({
                    //TODO
                    async: false,
                    url: 'webservice/rest/Article/byCategoryId/'+categoryId
                })
            }
        });
        return ArticleCollection;
    });
