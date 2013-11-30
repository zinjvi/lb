define(['use!backbone'], function (Backbone) {
    var CategoryModel = Backbone.Model.extend({
        'defaults': {
            'id': '',
            'name': '',
            'group_id': ''
        }
    });
    return CategoryModel;
});