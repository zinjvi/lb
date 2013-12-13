define(['common/views/BaseView', 'dust',
    'text!/templates/forum/anons.dust'],
    function(BaseView, dust, templateSources, PostModel){

    var PostView = BaseView.extend({
        template:{
            name: 'anons.template',
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
