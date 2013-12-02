define(['use!underscore', 'use!backbone',
    'common/views/BaseView', 'article/routerConfig',
    'adminka/routerConfig'],
    function(_, Backbone, BaseView,articleRouters,
             arminkaRoutes){

        var addExternalRoutes = function (router) {
            _.each(router.externalRoutes, function (externalRoutes) {
                addOneExternalRoutes(router, externalRoutes);
            }, router)
        }

        var addOneExternalRoutes = function (router, externalRoutes) {
            _.each(externalRoutes, function (collback, route) {
                this.route(route, collback);
            }, router)
        }

        var AppRouter = Backbone.Router.extend({
            externalRoutes: [arminkaRoutes, articleRouters],
            frame: {},
            setView: function(view, Frame){
                if(!(this.frame instanceof Frame)){
                    this.frame = new Frame();
                    this.frame.render();
                }
                this.frame.setContent(view);
            },
            routes: {
//                '': 'index',
//                'articlesList/:categoryId': 'articlesList',
//                'article/:articleId': 'article'
            },
            initialize: function () {
//                this.frame.render();
                addExternalRoutes(this);
            }//,
//            index: function () {
//                var Frame = MainFrameView;
//                console.log("index");
//                this.setView(new IndexView(), Frame);
//            },
//            articlesList: function (categoryId) {
//                var Frame = MainFrameView;
//                console.log("articles list");
//                this.setView(new ArticlesListView({
//                    categoryId: categoryId
//                }), Frame);
//            },
//            article: function (articleId) {
//                var Frame = MainFrameView;
//                var View = ArticleView;
//                console.log("article");
//                this.setView(new ArticleView({
//                    articleId: articleId
//                }), Frame);
////                this.frame.setContent(new ArticleView({
////                    articleId: articleId
////                }))
//                scrollTo(0, 340);
//            }
        });
        return AppRouter;
    });