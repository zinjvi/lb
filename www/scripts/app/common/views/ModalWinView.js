define(['common/views/BaseView',
    'text!common/templ/modalWin.dust'],
    function(BaseView, templateSources){

        var ModalWinView = BaseView.extend({
            template:{
                name: 'modalWin.template',
                source: templateSources
            },
            events:{
                'click .modal-dialog': 'closeModal'
            },
            initialize: function(){
                $('#myModal').on('hidden.bs.modal', function () {
                    // do something…
                    console.log("close");
                    this.remove();
                })
            },
            closeModal: function(){


            }
            /*,
            render: function(){
                BaseView.render.call(this);

            }*/
        });
        return ModalWinView;
    });