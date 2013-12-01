define(['views/MainFrameView', 'AppRouter',
    'configs/frameConfig', 'common/views/base'],
    function (MainFrameView, AppRouter, frameConfig, BaseView) {

        var router = new AppRouter();
        BaseView.prototype.router = this.router;

        var application = {
//        frameView: new MainFrameView(),
            router: router,
            frames: frameConfig,
            start: function () {
                this.router.route('my', function () {
                    console.log('my');
                });
                Backbone.history.start();
                console.log("s");
            }
        }

        return application;
    });