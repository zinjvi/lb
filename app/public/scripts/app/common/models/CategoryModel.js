define(['backbone.deepModel'/*, 'common/models/GroupModel'*/],
    function (Backbone, GroupModel) {
    var CategoryModel = Backbone.DeepModel.extend({
        'defaults': {
            '_id': '',
            'name': ''//,
//            'group': new GroupModel()
        }
    });
    return CategoryModel;
});