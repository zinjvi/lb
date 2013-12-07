define(['use!backbone', 'common/views/BaseView',
    'text!adminka/templ/articlesList.dust',
    'article/collections/ArticleCollection'],
    function(Backbone, BaseView, templateSources,
             ArticleCollection){

        var completeModel = function(categoryId){
            var articles = new ArticleCollection();
            articles.fetchByCategoryId(categoryId);
            var model = new Backbone.Model({
                articles: articles.toJSON()
            });
            return model;
        }

        var ArticlesListView = BaseView.extend({
            template:{
                name: 'articlesList.template',
                source: templateSources
            },
            initialize: function(options){
                this.model = completeModel(options.categoryId);
            }
        });
        return ArticlesListView;
    });