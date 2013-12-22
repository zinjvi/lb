define(['backbone.deepModel', 'common/collections/CategoryCollection'],
    function (Backbone, CategoryCollections) {
    var GroupModel = Backbone.DeepModel.extend({
        'defaults': {
            '_id': '',
            'name': '',
            'categories': new CategoryCollections()
        }
    });
    return GroupModel;
});