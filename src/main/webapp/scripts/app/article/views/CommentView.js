define(['common/views/BaseView', 'common/views/ModalWinView',
    'text!article/templ/comment.dust'],
    function(BaseView, ModalWinView, templateSources){

        var CommentView = BaseView.extend({
            className: 'comment _CommentView',
            template:{
                name: 'comment.template',
                source: templateSources
            },
            events: {
                'click .remove-comment': 'removeComment'
            },
            initialize: function(){

            },
            removeComment: function($event){
                var self = this;
                var modal = new ModalWinView({
                    title: "Подтверждение удаленияю",
                    content: "Вы уверены что хотите удалить этот комментарий?",
                    buttons: [
                        {
                            'label': 'Отмена',
                            'classes': 'btn-default close-modal'
                        },
                        {
                            'label': 'Удалить',
                            'classes': 'btn-primary close-modal',
                            'click': function(){
                                self.model.destroy({
                                    success: function(){
                                        self.remove();
                                    },
                                    error: function(){
                                        //TODO | implement this function for all project
                                    }
                                });
                            }
                        }
                    ]
                });


            }
        });
        return CommentView;
    });