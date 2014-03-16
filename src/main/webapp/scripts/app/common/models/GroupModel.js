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
        parse: function(attrs, options){
            console.log("parse");
            var attributes = _.omit(attrs, 'categories');
            if(attrs.categories) attributes.categories = new CategoryCollections(attrs.categories);
            return attributes;
        }
    });
    return GroupModel;
});