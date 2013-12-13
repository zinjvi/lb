define(['backbone.deepModel'], function (Backbone) {
    var GroupModel = Backbone.DeepModel.extend({
        'defaults': {
            'id': '',
            'name': ''
        }
    });
    return GroupModel;
});
