define(['common/models/BaseModel',
    'common/collections/CategoryCollection'],
    function (BaseModel, CategoryCollections) {
    var GroupModel = BaseModel.extend({
        'defaults': {
            '_id': '',
            'name': '',
            'categories': new CategoryCollections()
        },
        baseUrl: 'api/groups'
    });
    return GroupModel;
});