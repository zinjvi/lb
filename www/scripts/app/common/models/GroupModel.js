define(['use!backbone'], function (Backbone) {
    var GroupModel = Backbone.Model.extend({
        'defaults': {
            'id': '',
            'name': ''
        }
    });
    return GroupModel;
});
