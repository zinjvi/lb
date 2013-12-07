define(['jquery', 'use!backbone', 'AppRouter'],
    function ($, Backbone, AppRouter) {

        var test1 = function () {
            var Model = Backbone.Model.extend({
                default: {
                    name: ''
                },
                f: function () {
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
                main: function () {
                    var object = {};
                    _.extend(object, Backbone.Events);
                    object.on("alert", function (msg) {
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

        var test2 = function () {
            var v = $.extend({
                f1: function () {
                    console.log("f1");
                }
            });
        }

        var test3 = function () {
            function getXmlHttp() {
                try {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (ee) {
                    }
                }
                if (typeof XMLHttpRequest != 'undefined') {
                    return new XMLHttpRequest();
                }
            }

            var url = 'http://lb/article/articlesByCategoryId/2';
            var xmlHttp = getXmlHttp();

            xmlHttp.open('GET', url, true);
            xmlHttp.onreadystatechange = function(){
                console.log("ready state: "+xmlHttp.readyState);
//                console.log("content: "+xmlHttp.responseText);
            }
            xmlHttp.send(null);

            console.log("opend");


/*            function getUrl(url, cb) {
                var xmlhttp = getXmlHttp();
                xmlhttp.open("GET", url);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        cb(
                            xmlhttp.status,
                            xmlhttp.getAllResponseHeaders(),
                            xmlhttp.responseText
                        );
                    }
                }
                xmlhttp.send(null);
            }

            getUrl('http://lb/article/articlesByCategoryId/2', function(a, b, c){
                console.log("cb");
            })*/

        }


        var application = {
            router: new AppRouter(),
            start: function () {
                Backbone.history.start();
//                test1();
//                test2();
                //test3();

                console.log("application start");
            }
        }

        return application;
    });