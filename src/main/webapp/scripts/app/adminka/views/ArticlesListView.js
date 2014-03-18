define(['backbone', 'common/views/BaseView',
    'text!adminka/templ/articlesList.dust',
    'common/views/ModalWinView',
    'article/collections/ArticleCollection',
    'common/models/BaseModel',
    'article/models/ArticleModel',
    'common/models/CategoryModel',
    'adminka/views/ArticleListItemView',
    'adminka/views/EditCategoryView'],
    function (Backbone, BaseView, templateSources, ModalWinView, ArticleCollection, BaseModel, ArticleModel, CategoryModel, ArticleListItemView, EditCategoryView) {

        // TODO | need to rename this and template to 'category manage'
        var ArticlesListView = BaseView.extend({
            template: {
                name: 'articlesList.template',
                source: templateSources
            },
            events: {
                'click .change-category': 'changeCategory',
                'click .remove-category': 'removeCategory'
            },

            /**
             * @param options.categoryId
             * @param options.groupId
             * @param options.groups
             */
            initialize: function (options) {
                var self = this;
                //TODO | need move all 'options' fields to this View
                this.options = options;

                this.model = new Backbone.Model({
                    categoryId: options.categoryId
                });
                this.articles = new ArticleCollection();
                this.articles.on('add', this.addArticleOnUI, this);
                this.eventManager.on('add:new:article:to:list', this.addNewArticleToList, this);
                this.eventManager.on('update:article:in:list', this.updateArticleInList, this);
            },
            afterRender: function () {
                this.$listContainer = this.$el.find('ul');
                this.articles.fetchByCategoryId(this.options.categoryId);
            },
            addArticleOnUI: function (model, collection, options) {
                var itemView = new ArticleListItemView({model: model});
                this.$listContainer.append(itemView.render().el);
            },
            changeCategory: function ($event) {
//                var group = this.options.group;
//                var category = group.get('categories').get(this.options.categoryId);
                var groups = this.options.groups;
                var group = groups.get(this.options.groupId);
                var category = group.get('categories').get(this.options.categoryId);
                var modal = new ModalWinView({
                    title: "Редактирование категории",
                    content: new EditCategoryView({
                        groups: groups,
                        group: group,
                        category: category
                    })
                });
            },
            removeCategory: function ($event) {
                var self = this;
                if(!this.articles.isEmpty()){
                    new ModalWinView({
                        title: "Удаление категории невозможно!",
                        content: "Нельзя удалить категорию которая содержит статьи. Удилите сперва все статьи из категории.",
                        buttons: [
                            {
                                'label': 'OK',
                                'classes': 'btn-default close-modal'
                            }
                        ]
                    });
                    return;
                }
                new ModalWinView({
                    title: "Удаление катугории",
                    content:"Вы уверены что хотите удалить категорию?" ,
                    buttons: [
                        {
                            'label': 'Отмена',
                            'classes': 'btn-default close-modal'
                        },
                        {
                            'label': 'OK',
                            'classes': 'btn-primary close-modal',
                            'click': function(){
                                var category = new CategoryModel({id: self.options.categoryId});
                                category.destroy({
                                    success: function (model, response) {
                                        console.log('success');
                                        self.eventManager.trigger('manageArticle:removeCategoryOnUI',
                                            self.options.groupId, self.options.categoryId);
                                    },
                                    error: function () {
                                        console.log('error');
                                    }
                                });
                            }
                        }
                    ]
                });

            },
            addNewArticleToList: function (article) {
                article.set('description', '');
//                console.log('addNewArticleToList');
//                console.log(article);
                this.articles.add(article);
            },
            updateArticleInList: function (article) {
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