define(['common/views/base', 'use!dust',
    'text!/templates/aromo/aromo.dust',
    'aromo/views/MenuView', 'aromo/views/ContentView'],
    function(BaseView, dust, templateSources, MenuView, ContentView){

        var PostView = BaseView.extend({
            class: 'aromo-view',
            template:{
                name: 'aromo.template',
                source: templateSources
            },
            menuView: new MenuView(),
            contentView: new ContentView(),

//            model: new Post(),
            initialize: function(){
                $('.content').append(this.el);
                this.render();
            },
            render: function(){
                this.$el.html(this.renderTemplate());
                this.$el.find('.menu')
                    .append(this.menuView.render().el);
                this.$el.find('.content')
                    .append(this.contentView.render().el);
                return this;
            }
        });
        return PostView;
    });
