define(['jquery', 'backbone', 'AppRouter',
    'common/collections/GroupCollection', 'common/models/GroupModel',
    'article/models/ConfigModel','article/models/CommentModel', 'article/eventManager'],
    function ($, Backbone, AppRouter,
              GroupCollection, GroupModel, ConfigModel, CommentModel, eventManager) {

        var application = {
            router: new AppRouter(),
            start: function () {

                $.ajax({
                    url: 'http://localhost:7070/webservice/rest/comment/1',
                    type: 'DELETE',
                    crossDomain: true,
                    headers: {
                        'Accept':'application/json, text/javascript, */*; q=0.01',
                        'X-Requested-With':'XMLHttpRequest'
                    },
                    success: function(data, status, xhr){
                        console.log('s');
                    },
                    error: function(xhr, status, error){
                        console.log('e');
                    }
                });

                var comment = new CommentModel({id: 1});
                comment.destroy({
                    success: function(){
                        console.log('cs');
                    },
                    error: function(){
                        console.log('ce');
                    }
                });

//                Backbone.Events.);


//                Backbone.history.start();
//                console.log("application start");
            }
        }
        return application;
    });