define(['jquery', 'common/views/BaseView',
    'text!adminka/templ/index.dust', 'common/views/ModalWinView',
    'adminka/views/ManageArticleView'],
    function($, BaseView, templateSources, ModalWinView, ALV){

        var IndexView = BaseView.extend({
            template:{
                name: 'index.template',
                source: templateSources
            },
            events:{
                'click .open-modal': 'openModal'
            },
            initialize: function(){
            },
            openModal: function(){
                var modal = new ModalWinView({
                    title: "title test",
                    content: new ALV(),//"content test",
                    buttons: [
                        {
                            'label': 'Closable First',
                            'classes': 'btn-default close-modal'
                        },
                        {
                            'label': 'Second',
                            'classes': 'btn-primary close-modal',
                            'click': function(){
                                console.log("clclcl second");
                            }
                        }
                    ]
                });
                console.log("open modal");
            }
        });
        return IndexView;
    });
