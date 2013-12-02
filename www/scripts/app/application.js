define(['common/frames/MainFrameView', 'AppRouter',
    'common/views/BaseView'],
    function (MainFrameView, AppRouter, BaseView) {

        var router = new AppRouter();
        BaseView.prototype.router = this.router;

        var application = {
//        frameView: new MainFrameView(),
            router: router,
            start: function () {
//                this.router.route('my', function () {
//                    console.log('my');
//                });
                Backbone.history.start();
                console.log("s");
            }
        }

        return application;
    });