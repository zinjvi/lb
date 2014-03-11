define(['backbone', 'dust', 'underscore'],
    function (Backbone, dust, _) {

    /**
         define(['common/views/BaseView',
         'text!/template.dust'],
         function(BaseView, templateSources){

                var SomeView = BaseView.extend({
                    template:{
                        name: 'templateName.template',
                        source: templateSources
                    },
                    events: {

                    },
                    initialize: function(){

                    }
                });
                return SomeView;
            });
     */
    var BaseView = Backbone.View.extend({

        render: function () {
            this.$el.html(this.renderTemplate());
            this.afterRender();
            return this;
        },
        eventManager: _.extend({}, Backbone.Events),
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
