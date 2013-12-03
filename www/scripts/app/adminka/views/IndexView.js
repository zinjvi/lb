define(['jquery', 'common/views/BaseView',
    'text!adminka/templ/index.dust', 'common/views/ModalWinView'],
    function($, BaseView, templateSources, ModalWinView, modal){

        var IndexView = BaseView.extend({
            template:{
                name: 'index.template',
                source: templateSources
            },
            events:{
                'click .open-modal': 'openModal'
            },
            modal: new ModalWinView(),
            initialize: function(){
//                this.modal.render();
            },
            openModal: function(){
                this.modal.show();
                console.log("open modal");
            }
        });
        return IndexView;
    });
