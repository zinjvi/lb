define(['use!backbone', 'use!dust'], function (Backbone, dust) {
    var BaseView = Backbone.View.extend({
        renderTemplate: function () {
            this.templateName;
        }
    });
    return BaseView;
});
