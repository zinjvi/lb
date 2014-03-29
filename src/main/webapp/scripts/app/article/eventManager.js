require(['underscore', 'backbone'], function(_, Backbone){

    var eventManager = _.extend({}, Backbone.Events);

    eventManager.on('server:error', function(resp){


    });

    return eventManager;
});