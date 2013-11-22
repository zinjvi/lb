define(['use!backbone'], function(Backbone){
    var HeaderModel = Backbone.Model.extend({
        defaults:{
            headerValue: ''
        }
    });
    return HeaderModel;
});
