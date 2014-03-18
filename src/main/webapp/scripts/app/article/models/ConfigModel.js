define(['backbone', 'common/models/BaseModel'],
    function (Backbone, BaseModel) {
    var ArticleModel = BaseModel.extend({
        initialize: function(){
        },
        baseUrl: 'webservice/rest/singlePageConfig'
    });
    return ArticleModel;
});