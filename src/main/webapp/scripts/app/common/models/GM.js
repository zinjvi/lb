define(['common/models/BaseModel',
//    'common/collections/CategoryCollection',
    'common/models/GM2',
    'appconfig',
    'underscore'],
    function (BaseModel,
//              CategoryCollections,
              GM2,
              appconfig, _) {
    var GroupModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'name': '',
            'categories': new GM2()
        }
    });
    return GroupModel;
});