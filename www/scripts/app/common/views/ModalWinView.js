define(['common/views/BaseView',
    'text!common/templ/modalWin.dust'],
    function(BaseView, templateSources){

        var ModalWinView = BaseView.extend({
            className: '_modal-win-panel',
            template:{
                name: 'modalWin.template',
                source: templateSources
            },
            events:{
                'click .modal-dialog': 'closeModal'
            },
            initialize: function(){

            },
            show: function(){
                $('body').append(this.render().el);
                this.$el.modal('show');
            },
            hide: function(){
                this.$el.modal('hide');
            }
        });
        return ModalWinView;
    });