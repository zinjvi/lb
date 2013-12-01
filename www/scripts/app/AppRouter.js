define(['use!backbone', 'configs/frameConfig',
    'views/MainFrameView', 'common/views/base',
    'article/views/ArticlesListView', 'article/views/ArticleView'],
    function(Backbone, frameConfig,
             MainFrameView, BaseView,
             ArticlesListView, ArticleView){
    var AppRouter = Backbone.Router.extend({

        frame: new MainFrameView(),

        initialize: function(){
            this.frame.render();
        },

        routes: {
            '': 'index',
            'articlesList/:categoryId': 'articlesList',
            'article/:articleId': 'article'
        },

        index: function(){
        },

        articlesList: function(categoryId){
            this.frame.setContent(new ArticlesListView({
                categoryId: categoryId
            }))

        },

        article: function(articleId){
            this.frame.setContent(new ArticleView({
                articleId: articleId
            }))
            scrollTo(0, 340);
        }
    });

    return AppRouter;
});