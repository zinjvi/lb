define(['backbone',
    'article/singlePageConfig',
    'common/views/BaseView', 'dust',
    'text!article/templ/articlesList.dust',
    'article/collections/ArticleCollection'],
    function(Backbone, singlePageConfig, BaseView,
             dust, templateSources,
             ArticleCollections){

        var ArticlesListView = BaseView.extend({
            template:{
                name: 'articlesList.template',
                source: templateSources
            },
            articles: new ArticleCollections(),
            className: 'articles-list',
            model: {},
            initialize: function(options){
                this.articles.fetchByCategoryId(options.categoryId)
                this.model = new Backbone.Model({
                    articles: this.articles.toJSON(),
                    articleImagePath: singlePageConfig.system.articleImagePath
                });
            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            }
        });
        return ArticlesListView;
    });
