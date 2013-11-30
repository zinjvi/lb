define(['use!backbone'], function (Backbone) {
    var ArticleModel = Backbone.Model.extend({
        'defaults': {
            'id': '',
            'title': '',
            'description': '',
            'image': '',
            'category_id': ''
        }
    });
    return ArticleModel;
});