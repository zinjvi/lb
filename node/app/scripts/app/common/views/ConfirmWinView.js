define(['underscore', 'common/views/ModalWinView'],
    function(_, ModalWinView){

        var ConfirmWinView = ModalWinView.extend({
            initialize: function(options, callback){
                var defaultOptions = {
                    close: false,
                    buttons: [
                        {
                            'label': 'OK',
                            'classes': 'btn-primary close-modal',
                            'click': callback
                        },
                        {
                            'label': 'Отмена',
                            'classes': 'btn-default close-modal'
                        }
                    ]
                }
                _.extend(defaultOptions, options);

                this.constructor.__super__.initialize
                    .call(this, defaultOptions);
                console.log("as");
            }
        });
        return ConfirmWinView;
    });