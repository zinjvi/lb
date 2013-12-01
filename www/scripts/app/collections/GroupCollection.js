define(['common/collections/BaseCollection', 'models/GroupModel'],
    function(BaseCollection, GroupModel){
        var GroupCollection = BaseCollection.extend({
            model: GroupModel,
            url: '/article/groups',
            initialize: function(){
                this.fetch({async:false});
            }
        });
        return GroupCollection;
    });