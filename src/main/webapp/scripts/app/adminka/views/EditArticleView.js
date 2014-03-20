define(['underscore', 'common/views/BaseView',
    'adminka/views/CommentView',
    'text!adminka/templ/editArticle.dust',
    'article/models/ArticleModel',
    'article/models/CommentModel',
    'jquery', 'jquery.validate', 'jquery.serializeObject'],
    function(_, BaseView, CommentView, templateSources,
             ArticleModel, CommentModel, $){

        var EditArticleView = BaseView.extend({
            className: 'edit-adticle-view',
            template:{
                name: 'editArticle.template',
                source: templateSources
            },
            events: {
                'submit form.edit-article': 'saveArticle'
            },
            $form: undefined,
            initialize: function(options){
                if (options && options.articleId) {
                    this.model = new ArticleModel({
                        id: options.articleId,
                        category: {
                            id: options.categoryId
                        }
                    });
                    this.model.fetchById();
                }else {
                    this.model = new ArticleModel({
                        category: {
                            id: options.categoryId
                        }
                    });
                }
            },
            afterRender: function(){
                $.validator.setDefaults({
                    errorPlacement: function(error, element){
                        console.log("error");
                        console.log(error);
                        console.log(element);
                    }
                })
                this.$el.find('form.edit-article').validate();
                this.$form = this.$el.find('form.edit-article');
                this.$comments = this.$el.find('.comments');
                _.each(this.model.get('comments'), function(comment){
                    var commentView = new CommentView({
                        model: new CommentModel(comment)
                    });
                    this.$comments.append(commentView.render().el);
                }, this);
            },
            saveArticle: function(event) {
                var self = this;
                event.preventDefault();
                this.model.set(this.$form.serializeObject());
                console.log(this.$form.serializeObject());
                this.model.save({
                    success: function(model, responce, options){
//                        console.log("ssss");
                        var isNew = self.model.isNew();
                        self.model.set('id', responce);
                        if(isNew) self.eventManager.trigger(
                            'add:new:article:to:list',self.model);
                        if(!isNew) self.eventManager.trigger(
                            'update:article:in:list',self.model);
                        self.eventManager.trigger('clean:article:content');
                        self.remove();
                    }
                });
            }
        });
        return EditArticleView;
    });