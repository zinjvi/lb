require.config({
    baseUrl: "scripts/app/",
    paths: {
        lib: '/scripts/lib',
        text: '/scripts/lib/text',
        backbone: '/scripts/lib/backbone/backbone',
        'backbone.deepModel': '/scripts/lib/backbone/backbone.deepModel',
        'backbone.localStorage': '/scripts/lib/backbone/localStorage',
//        'backbone.relational': '/scripts/lib/backbone/backbone.relational',
        jquery: '/scripts/lib/jquery/jquery',
        'jquery.validate': '/scripts/lib/jquery/jquery.validate',
        'jquery.serializeObject': '/scripts/lib/jquery/jquery.serializeObject',
        'jquery.formparams': '/scripts/lib/jquery/jquery.formparams',
        underscore: '/scripts/lib/underscore',
//        use: '/scripts/lib/use',
        dust: '/scripts/lib/dust',
        'dust.helper': '/scripts/lib/dust-helper',
        css: '/scripts/lib/css',
        bootstrap: '/scripts/lib/bootstrap',
        log4javascript: '/scripts/lib/log4javascript'

    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'dust.helper': {
            deps: ['dust']
        },
        'underscore': {
            exports: '_'
        },
        'log4javascript': {
            exports: 'log4javascript',
            init: function() {
                log4javascript.setDocumentReady();
            }
        },
        'backbone.deepModel': {
            deps: ['underscore', 'jquery']//,
//            exports: 'Backbone'
        },
        'dust': {
            exports: 'dust'
        },
        'jquery.validate': ['jquery'],
        'jquery.serializeObject': ['jquery'],
        'jquery.formparams': ['jquery']
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

//require(['application'], function(application){
//    window.app = application;
//    application.start();
//});