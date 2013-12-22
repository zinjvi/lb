define(['backbone'], function (Backbone) {
    var ArticleModel = Backbone.Model.extend({
        'defaults': {
            'id': 0,
            'title': '',
            'description': '',
            'image': '',
            'category_id': ''
        },
        isNew: function() {
            return this.id;
        },
        url: function(){
            if(parseInt(this.id)){
                return 'article/api/'+this.id;
            }
            return 'article/api';
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