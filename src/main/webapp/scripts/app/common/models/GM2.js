define(['common/models/BaseModel',
//    'common/collections/CategoryCollection',
    'common/models/GM',
    'appconfig',
    'underscore'],
    function (BaseModel,
//              CategoryCollections,
              GM,
              appconfig, _) {
    var GroupModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'name': '',
            'categories': new GM()
        }
    });
    return GroupModel;
});