define(['common/views/BaseView', 'text!/templates/forum/forum.dust', 'forum/views/AnonsesPanelView',
    'forum/views/PostsPanelView'],
    function(BaseView, templateSources, AnonsesPanelView, PostsPanelView){

        var ForumView = BaseView.extend({
        template:{
            name: 'forum.template',
            source: templateSources
        },
        anonsesPanelView: new AnonsesPanelView(),
        postsPanelView: new PostsPanelView(),
        initialize: function(){
            $('body').append(this.$el);
            this.render();
        },
        render: function(){
            this.$el.append(this.renderTemplate());
            this.$el.find('.anonses-panel')
                .append(this.anonsesPanelView.render().el);
            this.$el.find('.posts-panel')
                .append(this.postsPanelView.render().el);
            return this;
        }
    });

    return ForumView;
});
