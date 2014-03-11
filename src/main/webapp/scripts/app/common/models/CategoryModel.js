define(['common/models/BaseModel'],
    function (BaseModel) {
    var CategoryModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'name': ''
        },
        baseUrl: 'webservice/rest/category'
    });
    return CategoryModel;
});