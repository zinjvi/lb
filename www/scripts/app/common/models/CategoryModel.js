define(['use!backbone', 'common/models/GroupModel'],
    function (Backbone, GroupModel) {
    var CategoryModel = Backbone.Model.extend({
        'defaults': {
            'id': '',
            'name': '',
            'group': new GroupModel()
        }
    });
    return CategoryModel;
});