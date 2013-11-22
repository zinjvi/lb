define(['scripts/app/forum/views/base', 'use!dust', 'text!templates/temp.dust'],
    function(BaseView, dust, templateSources){

    var PostView = BaseView.extend({
        class: 'post-view',
        template:{
            name: 'post.template',
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
