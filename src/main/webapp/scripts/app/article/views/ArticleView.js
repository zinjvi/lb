define(['underscore', 'log',
    'article/singlePageConfig',
    'common/views/BaseView',
    'article/views/CommentView',
    'dust',
    'text!article/templ/article.dust',
    'article/models/ArticleModel',
    'article/models/CommentModel',
    'article/collections/CommentCollection'
    /*, 'jquery', 'jquery.formparams'*/],
    function(_, log, singlePageConfig, BaseView, CommentView, dust,
             templateSources, ArticleModel, CommentModel, CommentCollection/*, $*/) {

        var addExistComments = function(comments, view){
            _.each(comments, function(comment){
                this.comments.add(new CommentModel(comment));
            }, view);
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
                this.articleId = options.articleId;

                this.comments.on('add', this.addCommentToUI, this);
            },
            beforeRender: function(){
                this.model.set('id', this.articleId);
                this.model.fetchById();
                this.model.set('articleImagePath', singlePageConfig.system.articleImagePath);
            },
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
                        self.comments.add(model);
                        log.debug('Comment "'+model.get('content')+'" added.');
                    }
                });
                this.$addCommentForm.find('[name=content]').val('');
            }
        });
        return ArticleView;
    });
