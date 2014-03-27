define(['backbone', 'common/models/BaseModel', 'article/eventManager'],
    function (Backbone, BaseModel, eventManager) {
    var ArticleModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'content': ''
        },
        // TODO | need change to urlRoot
        baseUrl: 'webservice/rest/comment',
        initialize: function(){
            BaseModel.prototype.initialize.call(this);
            console.log('created Comment model');
        }
    });
    //TODO | rename
    return ArticleModel;
});