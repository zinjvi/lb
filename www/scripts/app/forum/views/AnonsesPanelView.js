define(['common/views/BaseView', 'dust',
    'text!/templates/forum/anonsesPanel.dust'],
    function(BaseView, dust, templateSources, PostModel){

        var PostView = BaseView.extend({
            class: 'post-view',
            template:{
                name: 'anonsesPanel.template',
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
