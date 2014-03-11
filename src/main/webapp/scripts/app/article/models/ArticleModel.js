define(['backbone', 'common/models/BaseModel'],
    function (Backbone, BaseModel) {
    var ArticleModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'title': '',
            'description': ''
//            'image': '',
        },
        baseUrl: 'webservice/rest/Article',
//        isNew: function() {
//            return this.id;
//        },
//        url: function(){
//            if(parseInt(this.id)){
//                return 'webservice/rest/Article/'+this.id;
//            }
//            return 'webservice/rest/Article/';
//        },//'article/saveArticle',
        initialize: function(){
        },
        fetchById: function(){
            this.fetch({
                //TODO | need remove 'async: false'
                async: false,
                url: 'webservice/rest/Article/'+this.id
            });
        }
    });
    return ArticleModel;
});