define(['backbone.deepModel', 'common/collections/CategoryCollection'],
    function (Backbone, CategoryCollections) {
    var GroupModel = Backbone.DeepModel.extend({
        'defaults': {
            'id': '',
            'name': '',
            'categories': new CategoryCollections()
        }//,
//        parse : function(response, options){
//            var model = {};
//            _.each(response, function (val, key) {
//                if(key === 'categories'){
//                    var categories = new CategoryCollections();
//                    categories.add(categories.parse(val));
//                    model[key] = categories;
//                }else{
//                    model[key] = val;
//                }
//            }, this);
//            return model;
//        }
    });
    return GroupModel;
});