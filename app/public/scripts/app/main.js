require.config({
    baseUrl: "public/scripts/app/",
    paths: {
        text: '/public/scripts/lib/text',
        backbone: '/public/scripts/lib/backbone/backbone',
        'backbone.deepModel': '/public/scripts/lib/backbone/backbone.deepModel',
        'backbone.localStorage': '/public/scripts/lib/backbone/localStorage',
        'backbone.relational': '/public/scripts/lib/backbone/backbone.relational',
        jquery: '/public/scripts/lib/jquery/jquery',
        'jquery.validate': '/public/scripts/lib/jquery/jquery.validate',
        'jquery.serializeObject': '/public/scripts/lib/jquery/jquery.serializeObject',
        underscore: '/public/scripts/lib/underscore',
//        use: '/public/scripts/lib/use',
        dust: '/public/scripts/lib/dust',
        css: '/public/scripts/lib/css',
        bootstrap: '/public/scripts/lib/bootstrap'
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