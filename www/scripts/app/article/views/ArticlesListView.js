define(['use!backbone', 'common/views/BaseView', 'use!dust',
    'text!article/templ/articlesList.dust',
    'article/collections/ArticleCollection'],
    function(Backbone, BaseView, dust, templateSources,
             ArticleCollections){

        var ArticlesListView = BaseView.extend({
            template:{
                name: 'articlesList.template',
                source: templateSources
            },
            articles: new ArticleCollections(),
            model: {},
            initialize: function(options){
                this.articles.fetchByCategoryId(options.categoryId)
                this.model = new Backbone.Model({
                    articles: this.articles.toJSON()
                });
            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            }
        });
        return ArticlesListView;
    });