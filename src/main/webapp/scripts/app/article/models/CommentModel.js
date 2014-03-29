define(['backbone', 'common/models/BaseModel'],
    function (Backbone, BaseModel) {
    var ArticleModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'content': ''
        },
        // TODO | need change to urlRoot
        baseUrl: 'webservice/rest/comment'
    });
    //TODO | rename
    return ArticleModel;
});