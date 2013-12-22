define(['underscore', 'common/collections/BaseCollection',
    'common/models/GroupModel'],
    function(_, BaseCollection, GroupModel){
        var GroupCollection = BaseCollection.extend({
            model: GroupModel,
            url: '/api/groups',
            initialize: function(){

            }
        });
        return GroupCollection;
    });