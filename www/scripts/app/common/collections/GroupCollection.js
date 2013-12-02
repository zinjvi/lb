define(['common/collections/BaseCollection', 'common/models/GroupModel'],
    function(BaseCollection, GroupModel){
        var GroupCollection = BaseCollection.extend({
            model: GroupModel,
            url: '/article/groups',
            initialize: function(){
                // TODO | remove 'fetch' from initialize
                this.fetch({async:false});
            }
        });
        return GroupCollection;
    });