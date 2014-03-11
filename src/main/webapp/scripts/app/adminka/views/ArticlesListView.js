define(['backbone', 'common/views/BaseView',
    'text!adminka/templ/articlesList.dust',
    'article/collections/ArticleCollection',
    'adminka/views/ArticleListItemView'],
    function (Backbone, BaseView, templateSources, ArticleCollection, ArticleListItemView) {

        var completeArticles = function (categoryId) {
            var articles = new ArticleCollection();
            articles.fetchByCategoryId(categoryId);
//            var model = new Backbone.Model({
//                categoryId: categoryId,
//                articles: articles
//            });
            return articles;
        }

        var addArticleToList = function (article, context) {
            var itemView = new ArticleListItemView({
                model: article
            });
            context.$el.find('ul').append(itemView.render().el);
        }

        var ArticlesListView = BaseView.extend({
            template: {
                name: 'articlesList.template',
                source: templateSources
            },
            afterRender: function () {
                var articles = new ArticleCollection();
                articles.fetchByCategoryId(this.options.categoryId);
                articles.each(function (article) {
                    addArticleToList(article, this)
                }, this);
            },
            initialize: function (options) {
                this.options = options;
                this.model = new Backbone.Model({
                    categoryId: options.categoryId
                });
                this.articles = completeArticles(this.options.categoryId);
                this.eventManager.on('add:new:article:to:list', this.addNewArticleToList, this);
                this.eventManager.on('update:article:in:list', this.updateArticleInList, this);
            },
            addNewArticleToList: function (article) {
                console.log('addNewArticleToList');
                console.log(article);
                addArticleToList(article, this);
            },
            updateArticleInList: function(article){
                console.log('updateArticleInList');
                console.log(article);
            }
        });
        return ArticlesListView;
    });