define(['underscore',
    'common/models/GroupModel',
//    'common/models/GM',
    'common/models/BaseModel'],
    function (_, GroupModel, /*GM,*/ BaseModel) {
    var CategoryModel = BaseModel.extend({
        'defaults': {
            'id': '',
            'name': ''
//            'group': new GroupModel()
        },
        baseUrl: 'webservice/rest/category',
        parse: function(attrs){
            //TODO
//            var attributes = _.omit(attrs, 'group');
//            if(attrs.group) attributes.group = new GroupModel(attrs.group);
            return attrs;//attributes;
        },
        initialize: function(){
            BaseModel.prototype.initialize.call(this);
        }
    });
    return CategoryModel;
});