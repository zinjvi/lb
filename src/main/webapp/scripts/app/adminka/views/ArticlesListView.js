define(['backbone', 'common/views/BaseView',
    'text!adminka/templ/articlesList.dust',
    'article/collections/ArticleCollection',
    'article/models/ArticleModel',
    'adminka/views/ArticleListItemView'],
    function (Backbone, BaseView, templateSources,
              ArticleCollection, ArticleModel,
              ArticleListItemView) {

        var ArticlesListView = BaseView.extend({
            template: {
                name: 'articlesList.template',
                source: templateSources
            },
            initialize: function (options) {
                var self = this;
                this.options = options;
                this.model = new Backbone.Model({
                    categoryId: options.categoryId
                });
                this.articles = new ArticleCollection();
                this.articles.on('add', function(model, collection, options){
                    var itemView = new ArticleListItemView({model: model});
                    self.$listContainer.append(itemView.render().el);
                });

                this.eventManager.on('add:new:article:to:list', this.addNewArticleToList, this);
                this.eventManager.on('update:article:in:list', this.updateArticleInList, this);
            },
            afterRender: function () {
                this.$listContainer = this.$el.find('ul');
                this.articles.fetchByCategoryId(this.options.categoryId);
            },

            addNewArticleToList: function (article) {
                article.set('description', '');
//                console.log('addNewArticleToList');
//                console.log(article);
                this.articles.add(article);
            },
            updateArticleInList: function(article){
//                console.log('updateArticleInList');
//                console.log(article);
//                console.log('article id = ' + article.get('id'));
                var articleFromCollection = this.articles.get(article.get('id'));
                articleFromCollection.set('title', article.get('title'));
                articleFromCollection.set('notice', article.get('notice'));
            }
        });
        return ArticlesListView;
    });