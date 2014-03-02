define(['appconfig', 'underscore', 'common/collections/BaseCollection',
    'common/models/GroupModel'],
    function(appconfig, _, BaseCollection, GroupModel){
        var GroupCollection = BaseCollection.extend({
            model: GroupModel,
            //TODO | need implement using property
            url: 'webservice/rest/group/all',//appconfig.url.group.all,
            initialize: function(){

            }
        });
        return GroupCollection;
    });