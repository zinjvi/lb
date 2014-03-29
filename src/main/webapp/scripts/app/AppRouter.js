define(['underscore', 'backbone',
    'common/views/BaseView', 'article/routerConfig',
    'adminka/routerConfig'],
    function(_, Backbone, BaseView, articleRouters,
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

            },
            initialize: function () {
                addExternalRoutes(this);
            }
        });
        return AppRouter;
    });