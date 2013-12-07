require.config({
    baseUrl: "/scripts/app/",
    paths: {
        text: '/scripts/lib/text',
        backbone: '/scripts/lib/backbone/backbone',
        localStorage: '/scripts/lib/backbone/localStorage',
        modelBinder: '/scripts/lib/backbone/modelBinder',
        jquery: '/scripts/lib/jquery',
        underscore: '/scripts/lib/underscore',
        use: '/scripts/lib/use',
        dust: '/scripts/lib/dust',
        css: '/scripts/lib/css',
        bootstrap: '/scripts/lib/bootstrap'
    },
    use: {
        backbone: {
            deps: ["use!underscore", "jquery"],
            attach: "Backbone"
        },
        underscore: {
            attach: "_"
        },
        dust: {
            attach: "dust"
        }
    }
});

require(['application'], function(application){
    window.app = application;
    application.start();
});