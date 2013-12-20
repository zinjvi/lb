define(['jquery', 'backbone', 'AppRouter',

    'common/collections/GroupCollection',
    'common/models/GroupModel'],
    function ($, Backbone, AppRouter,

              GroupCollection, GroupModel) {

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
        }

        function test4(){
            var group = new GroupModel({
                'id': 1,
                'name': 'nnn1',
                'categories': [
                    {
                        'id': '20',
                        'name': 'asa'
                    },
                    {
                        'id': '21',
                        'name': 'awef'
                    }
                ]
            });


            var groups = new GroupCollection([{
                'id': 1,
                'name': 'nnn1',
                'categories': [
                    {
                        'id': '20',
                        'name': 'asa'
                    },
                    {
                        'id': '21',
                        'name': 'awef'
                    }
                ]
            },{
                'id': 2,
                'name': 'nnn2'
            }]);

            console.log("asd");
        }

        function test5(){
            var model = new Backbone.DeepModel({
                id: 123,
                user: {
                    type: 'Spy',
                    name: {
                        first: 'Sterling',
                        last: 'Archer'
                    }
                },
                otherSpies: [
                    { name: 'Lana' },
                    { name: 'Cyrril' }
                ]
            });
        }


        var application = {
            router: new AppRouter(),
            start: function () {
                Backbone.history.start();
//                test1();
//                test2();
                //test3();
//                test4();
//                test5();

                console.log("application start");
            }
        }

        return application;
    });