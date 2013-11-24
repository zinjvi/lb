define(['/scripts/app/common/views/base', 'use!dust', 'text!templates/post.dust', 'scripts/app/forum/models/Post'],
    function(BaseView, dust, templateSources, Post){

    var PostView = BaseView.extend({
        class: 'post-view',
        template:{
            name: 'post.template',
            source: templateSources
        },
        model: new Post(),
        initialize: function(){

        },
        render: function(){
            this.$el.html(this.renderTemplate());
            return this;
        }
    });
    return PostView;
});
