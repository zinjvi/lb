define(['use!backbone'], function (Backbone) {
    var ArticleModel = Backbone.Model.extend({
        'defaults': {
            'id': '0',
            'title': '',
            'description': '',
            'image': '',
            'category_id': ''
        },
        url: function(){
            if(this.id){
                return 'article/saveArticle/'+this.id;
            }
            return 'article/saveArticle';
        },//'article/saveArticle',
        initialize: function(){
        },
        fetchById: function(){
            this.fetch({
                async: false,
                url: 'article/articleById/'+this.id
            });
        }
    });
    return ArticleModel;
});