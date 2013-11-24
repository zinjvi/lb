define(['common/views/base', 'use!dust',
    'text!/templates/aromo/content.dust'],
    function(BaseView, dust, templateSources){

        var ContentView = BaseView.extend({
            template:{
                name: 'content.template',
                source: templateSources
            },
            initialize: function(){

            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            }
        });
        return ContentView;
    });
