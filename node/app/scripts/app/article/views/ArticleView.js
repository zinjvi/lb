define(['common/views/BaseView', 'dust',
    'text!article/templ/article.dust',
    'article/models/ArticleModel'],
    function(BaseView, dust, templateSources, ArticleModel){

        var ArticleView = BaseView.extend({
            template:{
                name: 'article.template',
                source: templateSources
            },
            model: new ArticleModel(),
            initialize: function(options){
                this.model.set('id', options.articleId);
                this.model.fetchById();
            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            }
        });
        return ArticleView;
    });
