define(['common/collections/BaseCollection',
    'common/models/GroupModel',
    'common/models/CategoryModel'],
    function(BaseCollection, GroupModel, CategoryModel){
        var CategoryCollection = BaseCollection.extend({
            model: CategoryModel
//            url: '/article/groups',
//            initialize: function(){
//                this.fetch({async:false});
//            }
        });
        return CategoryCollection;
    });