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
            initialize: function(){

            },
            openModal: function(){
                console.log("om");
                var modal = new ModalWinView();
                this.$el.append(modal.render().el);

                $('#myModal').modal('show');
            }
        });
        return IndexView;
    });
