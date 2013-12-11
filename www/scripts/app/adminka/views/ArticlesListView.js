define(['use!backbone', 'common/views/BaseView',
    'text!adminka/templ/articlesList.dust',
    'article/collections/ArticleCollection',
    'adminka/views/ArticleListItemView'],
    function(Backbone, BaseView, templateSources,
             ArticleCollection, ArticleListItemView){

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
            afterRender: function(){
                var articles = new ArticleCollection();
                articles.fetchByCategoryId(this.options.categoryId);
                articles.each(function(element, index){
                    var itemView = new ArticleListItemView({
                        model: element
                    });
                    this.$el.find('ul').append(itemView.render().el);
                }, this);
            },
            initialize: function(options){
                this.options = options;
            }
        });
        return ArticlesListView;
    });