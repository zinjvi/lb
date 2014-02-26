define(['common/models/BaseModel'],
    function (BaseModel) {
    var CategoryModel = BaseModel.extend({
        'defaults': {
            '_id': '',
            'name': ''
        },
        baseUrl: 'api/categories'
    });
    return CategoryModel;
});