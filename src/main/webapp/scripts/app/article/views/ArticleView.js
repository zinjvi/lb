define(['article/singlePageConfig',
    'common/views/BaseView', 'dust',
    'text!article/templ/article.dust',
    'article/models/ArticleModel'],
    function(singlePageConfig, BaseView, dust,
             templateSources, ArticleModel){

        var ArticleView = BaseView.extend({
            template:{
                name: 'article.template',
                source: templateSources
            },
            className: 'article _el',
            model: new ArticleModel(),
            initialize: function(options){
                this.model.set('id', options.articleId);
                this.model.fetchById();
                this.model.set('articleImagePath', singlePageConfig.system.articleImagePath);
            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            }
        });
        return ArticleView;
    });
