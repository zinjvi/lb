define(['underscore', 'article/singlePageConfig',
    'common/views/BaseView',
    'article/views/CommentView',
    'dust',
    'text!article/templ/article.dust',
    'article/models/ArticleModel',
    'article/models/CommentModel',
    'article/collections/CommentCollection'
    /*, 'jquery', 'jquery.formparams'*/],
    function(_, singlePageConfig, BaseView, CommentView, dust,
             templateSources, ArticleModel, CommentModel, CommentCollection/*, $*/) {

        var addExistComments = function(comments, view){
            _.each(comments, function(comment){
                view.comments.add(new CommentModel(comment));
            }, this);
        }

        var ArticleView = BaseView.extend({
            template:{
                name: 'article.template',
                source: templateSources
            },
            events:{
                'click .add-comment': 'addComment'
            },
            className: 'article _el',
            model: new ArticleModel(),
            comments: new CommentCollection(),
            initialize: function(options){
                this.model.set('id', options.articleId);
                this.model.fetchById();
                this.model.set('articleImagePath', singlePageConfig.system.articleImagePath);
                this.comments.on('add', this.addCommentToUI, this);
            },
//            render: function(){
//                this.$el.html(this.renderTemplate());
//                return this;
//            },
            afterRender: function(){
                this.$addCommentForm = this.$el.find('.add-comment-section form');
                this.$comments = this.$el.find('.comments');
                addExistComments(this.model.get('comments'), this);
            },
            addCommentToUI: function(comment){
                new CommentView({model:comment}).renderTo(this.$comments);
            },
            addComment: function($event){
                var self = this;
                var comment = new CommentModel(this.$addCommentForm.formParams());
                comment.save({
                    success: function(model, response){
                        console.log('s');
                        model.set('id', response);
                        self.comments.add(model);
                    },
                    error: function(){
                        console.log('e');
                        //TODO
                    }
                });
            }
        });
        return ArticleView;
    });
