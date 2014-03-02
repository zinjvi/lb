define(['common/models/BaseModel',
    'common/collections/CategoryCollection', 'appconfig'],
    function (BaseModel, CategoryCollections, appconfig) {
    var GroupModel = BaseModel.extend({
        'defaults': {
            '_id': '',
            'name': '',
            'categories': new CategoryCollections()
        },
        //TODO | need implement using property
        baseUrl: 'webservice/rest/group'//appconfig.url.group.base
    });
    return GroupModel;
});