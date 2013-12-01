define(['common/collectiions/BaseCollection', 'models/CategoryModel'],
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