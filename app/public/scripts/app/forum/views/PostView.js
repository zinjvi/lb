define(['common/views/BaseView', 'dust',
    'text!/templates/forum/post.dust', 'forum/models/PostModel'],
    function(BaseView, dust, templateSources, PostModel){

    var PostView = BaseView.extend({
        class: 'post-view',
        template:{
            name: 'post.template',
            source: templateSources
        },
        model: new PostModel(),
        initialize: function(){

        },
        render: function(){
            this.$el.html(this.renderTemplate());
            return this;
        }
    });
    return PostView;
});
