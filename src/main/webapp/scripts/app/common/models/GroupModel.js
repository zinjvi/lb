define(['common/models/BaseModel',
    'common/collections/CategoryCollection', 'appconfig',
    'underscore'],
    function (BaseModel, CategoryCollections, appconfig, _) {
    var GroupModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'name': '',
            'categories': new CategoryCollections()
        },
        //TODO | need implement using property
        baseUrl: 'webservice/rest/group',//appconfig.url.group.base
        parse: function(response, options){
            console.log("parse");
            var o = _.omit(response, 'categories');
            o.categories = new CategoryCollections(response.categories);
            return o;
        }
    });
    return GroupModel;
});