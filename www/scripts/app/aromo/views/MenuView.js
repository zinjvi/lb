define(['common/views/base', 'use!dust',
    'text!/templates/aromo/menu.dust'],
    function(BaseView, dust, templateSources){

        var PostView = BaseView.extend({
            class: 'menu-view',
            template:{
                name: 'menu.template',
                source: templateSources
            },
            initialize: function(){

            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            }
        });
        return PostView;
    });
