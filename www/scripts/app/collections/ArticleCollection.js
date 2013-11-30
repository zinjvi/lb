define(['common/collectiions/BaseCollection', 'models/ArticleModel'],
    function(BaseCollection, ArticleModel){
        var ArticleCollection = Backbone.Collection.extend({
            model: ArticleModel
//            url: '/article/groups',
//            initialize: function(){
//                this.fetch({async:false});
//            }
        });
        return ArticleCollection;
    });
