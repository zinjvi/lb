define(['log', 'jquery', 'backbone', 'AppRouter',
    'common/collections/GroupCollection', 'common/models/GroupModel',
    'article/models/ConfigModel','article/models/CommentModel',
    'article/eventManager', 'common/models/BaseModel',
    'common/collections/BaseCollection', 'common/views/ModalWinView'],
    function (log, $, Backbone, AppRouter,
              GroupCollection, GroupModel, ConfigModel, CommentModel,
              eventManager, BaseModel, BaseCollection, ModalWinView) {

        var f1 = function(){

            var NewModel = Backbone.Model.extend({

            });
            var newModel = new NewModel({f:"nm_0"});

            var group1 = new GroupModel();

            var model1 = new CommentModel({field:"m1_0"});
            var model2 = new CommentModel({field:"m2_0"});
            model1.on('change', function(){
                console.log('change trigger');
                console.log(this);
            });

            model2.trigger('change');
        }

        var application = {
            router: new AppRouter(),
            start: function () {
                f1();
                var eventManager = _.extend({}, Backbone.Events);

                eventManager.on('server:error', function(resp){
                    console.log('server:error');
                    console.log(resp.responseText);
                    if(resp.status == 500) new ModalWinView({
                        title: 'Server error!',
                        content: resp.responseText,
                        buttons: [
                            {
                                'label': 'OK',
                                'classes': 'btn-primary close-modal'
                            }
                        ]
                    });
                });

                BaseModel.prototype.eventManager
                    = BaseCollection.prototype.eventManager
                    = eventManager;

                Backbone.history.start();
//                new AppRouter();
                log.debug("------- application started -------");
            }
        }
        return application;
    });