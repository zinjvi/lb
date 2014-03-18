define(['backbone', 'common/models/BaseModel'],
    function (Backbone, BaseModel) {
    var ArticleModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'comment': ''
        },
        // TODO | need change to urlRoot
        baseUrl: 'webservice/rest/comment'
    });
    return ArticleModel;
});