define(['backbone', 'dust', 'dust.helper', 'underscore'],
    function (Backbone, dust, dustHelper, _) {

    /**
         define(['log', 'common/views/BaseView',
         'text!template.dust'],
         function(log, BaseView, templateSources){

                var SomeView = BaseView.extend({
                    template:{
                        name: 'templateName.template',
                        source: templateSources
                    },
                    events: {

                    },
                    initialize: function(){

                    },
                    beforeRender: function(){

                    },
                    afterRender: function(){

                    },
                });
                return SomeView;
            });
     */
    var BaseView = Backbone.View.extend({

        //TODO | need create function with DOM element argument. So we can render to some DOM element
        render: function () {
            this.beforeRender();
            this.$el.html(this.renderTemplate());
            this.afterRender();
            return this;
        },
        renderTo: function (element) {
            this.beforeRender();
            this.$el.html(this.renderTemplate());
            this.afterRender();
            this.$el.appendTo(element);
        },
        eventManager: _.extend({}, Backbone.Events),
        afterRender: function(){},
        beforeRender: function(){},
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
