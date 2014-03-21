define(['common/views/BaseView', 'common/view/ModalWinView',
    'text!adminka/templ/comment.dust'],
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
                var modal = new ModalWinView({
                    title: "Вы уверены что хотите удалить этот комментарий?",
                    content: "content test",
                    buttons: [
                        {
                            'label': 'Closable First',
                            'classes': 'btn-default close-modal'
                        },
                        {
                            'label': 'Second',
                            'classes': 'btn-primary close-modal',
                            'click': function(){
                                console.log("cl second");
                            }
                        }
                    ]
                });

                this.model.destroy({
                    success: function(){

                    },
                    error: function(){
                        //TODO | implement this function for all project
                    }
                });
            }
        });
        return CommentView;
    });