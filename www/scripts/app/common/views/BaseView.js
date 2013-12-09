define(['use!backbone', 'use!dust'], function (Backbone, dust) {


    /**
     *
     *
         define(['common/views/BaseView', 'use!dust',
         'text!/template.dust'],
         function(BaseView, dust, templateSources){

                var SomeView = BaseView.extend({
                    template:{
                        name: 'templateName.template',
                        source: templateSources
                    },
                    initialize: function(){

                    }
                });
                return SomeView;
            });
     *
     */

    var BaseView = Backbone.View.extend({

        render: function () {
            this.$el.html(this.renderTemplate());
            this.afterRender();
            return this;
        },
        afterRender: function(){},
        renderTemplate: function () {
            //TODO need optimization
            this.template;
            var compiled = dust.compile(this.template.source,
                this.template.name);
            dust.loadSource(compiled);
            var rendered;
            dust.render(this.template.name,
                this.model && this.model.toJSON(),
                function (err, out) {
                    rendered = out;
                });
            return rendered;
        }
    });
    return BaseView;
});
