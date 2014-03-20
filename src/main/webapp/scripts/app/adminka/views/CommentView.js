define(['common/views/BaseView',
    'text!adminka/templ/comment.dust'],
    function(BaseView, templateSources){

        var CommentView = BaseView.extend({
            className: 'comment _CommentView',
            template:{
                name: 'comment.template',
                source: templateSources
            },
            events: {

            },
            initialize: function(){

            }
        });
        return CommentView;
    });