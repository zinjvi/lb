define(['jquery', 'use!backbone', 'common/frames/MainFrameView', 'AppRouter',
    'common/views/BaseView'],
    function ($, Backbone, MainFrameView, AppRouter, BaseView) {

        var test1 = function(){
            var Model = Backbone.Model.extend({
                default: {
                    name: ''
                },
                f: function(){
                    console.log("f");
                }
            });
            var model = new Model();

            var Collection = Backbone.Collection.extend({
                model: Model
            });
//            var collection = new Collection();

            var MainModel = Backbone.Model.extend({
                collection: new Collection(),
                m: model,
                main: function(){
                    var object = {};
                    _.extend(object, Backbone.Events);
                    object.on("alert", function(msg) {
                        console.log("Triggered: " + msg);
                    });
                    object.trigger("alert", "an event");

                    var object2 = {};
                    _.extend(object2, Backbone.Events);
                    object2.trigger("alert", "an event 2");

                    this.m.f();
                    console.log("main");
                }
            });

            var mainModel = new MainModel();
            mainModel.main();
//            model.f();
        }

        var test2 = function(){
            var v = $.extend({
                f1: function(){
                    console.log("f1");
                }
            });
        }

        var application = {
            //router: new AppRouter(),
            start: function () {
                //Backbone.history.start();
//                test1();
//                test2();
                console.log("application start");
            }
        }

        return application;
    });