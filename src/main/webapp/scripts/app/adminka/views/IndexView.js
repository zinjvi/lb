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
            },
            initialize: function(){
            }
        });
        return IndexView;
    });
