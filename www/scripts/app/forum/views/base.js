define(['use!backbone', 'use!dust'], function (Backbone, dust) {
    var BaseView = Backbone.View.extend({

        renderTemplate: function () {
            //TODO need optimization
            this.template;
            var compiled = dust.compile(this.template.source,
                this.template.name);
            dust.loadSource(compiled);

            var rendered;
            dust.render(this.template.name,
                this.model&&this.model.toJSON(),
                function(err, out){
                    rendered = out;
            });
            return rendered;
        }
    });
    return BaseView;
});
