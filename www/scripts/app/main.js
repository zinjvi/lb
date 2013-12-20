require.config({
    baseUrl: "/scripts/app/",
    paths: {
        text: '/scripts/lib/text',
        backbone: '/scripts/lib/backbone/backbone',
        'backbone.deepModel': '/scripts/lib/backbone/backbone.deepModel',
        'backbone.localStorage': '/scripts/lib/backbone/localStorage',
        'backbone.relational': '/scripts/lib/backbone/backbone.relational',
        jquery: '/scripts/lib/jquery/jquery',
        'jquery.validate': '/scripts/lib/jquery/jquery.validate',
        'jquery.serializeObject': '/scripts/lib/jquery/jquery.serializeObject',
        underscore: '/scripts/lib/underscore',
//        use: '/scripts/lib/use',
        dust: '/scripts/lib/dust',
        css: '/scripts/lib/css',
        bootstrap: '/scripts/lib/bootstrap'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'backbone.deepModel': {
            deps: ['underscore', 'jquery']//,
//            exports: 'Backbone'
        },
        'dust': {
            exports: 'dust'
        },
        'jquery.validate': ['jquery'],
        'jquery.serializeObject': ['jquery']
    }//,
//    use: {
//        backbone: {
//            deps: ["use!underscore", "jquery"],
//            attach: "Backbone"
//        },
//        underscore: {
//            attach: "_"
//        },
//        dust: {
//            attach: "dust"
//        }
//    }
});

require(['application'], function(application){
    window.app = application;
    application.start();
});