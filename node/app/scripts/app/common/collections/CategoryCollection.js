define(['common/collections/BaseCollection', 'common/models/CategoryModel'],
    function(BaseCollection, CategoryModel){
        var CategoryCollection = BaseCollection.extend({
            model: CategoryModel
//            url: '/article/groups',
//            initialize: function(){
//                this.fetch({async:false});
//            }
        });
        return CategoryCollection;
    });