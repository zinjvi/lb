define(['/scripts/app/common/views/base', 'text!templates/forum.dust', 'scripts/app/forum/views/header', 'scripts/app/forum/views/ContentView'],
    function(BaseView, templateSources, HeaderViev, ContentView){

        var ForumView = BaseView.extend({
        template:{
            name: 'forum.template',
            source: templateSources
        },
        headerView: new HeaderViev(),
        contentView: new ContentView(),
        initialize: function(){
            $('body').append(this.$el);
            this.render();
        },
        render: function(){
            this.$el.append(this.renderTemplate());
            this.$el.find('.header').append(this.headerView.render().el);
            this.$el.find('.content').append(this.contentView.render().el);
            return this;
        }
    });

    return ForumView;
});
