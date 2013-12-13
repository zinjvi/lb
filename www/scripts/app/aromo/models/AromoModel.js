define(['backbone'], function (Backbone) {
    var AromoModel = Backbone.Model.extend({
        'defaults': {
            'id': '',
            'name': '',
            'text': '',
            'image': ''
        }
    });
    return AromoModel;
});
