define(['underscore', 'common/collections/BaseCollection',
    'common/models/GroupModel'],
    function(_, BaseCollection, GroupModel){
        var GroupCollection = BaseCollection.extend({
            model: GroupModel,
            url: '/article/groups',
            initialize: function(){
                // TODO | remove 'fetch' from initialize
                this.fetch({async:false});
            }
            // TODO | review parse method of ancestor
//            parse: function(response, options){
//                var list = [];
//                _.each(response, function (val) {
//                    var model = new this.model();
//                    model.set(model.parse(val));
//                    list.push(model);
//                }, this);
//                return list;
//            }
        });
        return GroupCollection;
    });