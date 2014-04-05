define(['underscore', 'log',
    'article/singlePageConfig',
    'common/views/BaseView',
    'article/views/CommentView',
    'article/views/CreateCommentView',
    'dust',
    'text!article/templ/article.dust',
    'article/models/ArticleModel',
    'article/models/CommentModel',
    'article/collections/CommentCollection'
    /*, 'jquery', 'jquery.formparams'*/],
    function(_, log, singlePageConfig, BaseView, CommentView,
             CreateCommentView, dust,
             templateSources, ArticleModel, CommentModel,
             CommentCollection/*, $*/) {

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

            },
            className: 'article _el',
            model: new ArticleModel(),
            comments: new CommentCollection(),
            initialize: function(options){
                this.articleId = options.articleId;
                this.createCommentView = new CreateCommentView({
                    articleId: this.articleId
                });
                this.comments.on('add', this.addCommentToUI, this);
                this.eventManager.on('article:addComment', this.addCommentToUI, this);
            },
            beforeRender: function(){
                this.model.set('id', this.articleId);
                this.model.fetchById();
                this.model.set('articleImagePath', singlePageConfig.system.articleImagePath);
            },
            afterRender: function(){
//                this.$addCommentForm = this.$el.find('.add-comment-section form');
                this.$comments = this.$el.find('.comments');
                this.addCommentSection = this.$el.find('._addCommentSection');
                addExistComments(this.model.get('comments'), this);
                this.createCommentView.renderTo(this.addCommentSection);
            },
            addCommentToUI: function(comment){
                new CommentView({model:comment}).renderTo(this.$comments);
            }
        });
        return ArticleView;
    });
