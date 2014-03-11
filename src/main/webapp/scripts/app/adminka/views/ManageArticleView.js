define(['backbone', 'backbone.relational','common/views/BaseView',
    'common/views/ModalWinView',
    'common/models/CategoryModel',
    'common/models/GroupModel',
    'article/models/ArticleModel',
    'text!adminka/templ/manageArticle.dust',
    'common/collections/GroupCollection',
    'adminka/views/ArticlesListView',
    'adminka/views/EditArticleView',
    'adminka/views/EditCategoryView',
    'css!adminka/css/styles'],
    function(Backbone, BacboneRelational, BaseView, ModalWinView,
             CategoryModel, GroupModel, ArticleModel, templateSources,
             GroupCollection, ArticlesListView, EditArticleView,
             EditCategoryView){

        var completeModel = function(){
            var groups = new GroupCollection();
            groups.fetch({async: false});
            var model = new Backbone.Model({
                groups: groups.toJSON()
            });
            return model;
        }

        var isCurrentTagOpened = function(view, target){
            return view.$el.find('.choose-article-panel #category_'
                +target.id).hasClass('in');
        }

        var ManageArticleView = BaseView.extend({
            template:{
                name: 'manageArticle.template',
                source: templateSources
            },
            events: {
                'click .category': 'showArticleList',
                'click .change-article': 'changeArticle',
                'click .add-article': 'addArticle',
//                'click .save-article': 'saveArticle',
                'click .add-category': 'addCategory',
                'click .change-category': 'changeCategory'
            },
            // TODO | groups must be in model
            groups: new GroupCollection(),
            initialize: function(){
                console.log("new mav");
                this.model = completeModel();
                this.eventManager.on('clean:article:content', this.cleanArticleContent, this);
            },
            afterRender: function(){
                this.$article = this.$el.find('.article');
            },
            cleanArticleContent: function(){
                this.$article.html('');
            },
            showArticleList: function(event) {
                var target = event.target;
                var categoryId = $(target).data('id');
                console.log("list art: " + categoryId);
                var articlesListView = new ArticlesListView({
                    categoryId: categoryId
                });
                //  TODO | should be like field
                this.$el.find('.articles').html('');
                this.$el.find('.articles').append(articlesListView.render().el);
            },
            changeArticle: function($event){
                var articleId = $($event.currentTarget).data('id');
                var editArticleView = new EditArticleView({
                    articleId: articleId
                });
                editArticleView.render();
                //  TODO | should be like field
                this.$el.find('.article').html('');
                this.$el.find('.article').append(editArticleView.el);
            },
            addArticle: function($event){
                console.log("add article");
                var target = $event.currentTarget;
                var editArticleView = new EditArticleView({
                    categoryId: $(target).data('category-id')
                });
                editArticleView.render();
                //TODO ||
                this.$el.find('.article').html('');
                this.$el.find('.article').append(editArticleView.el);
            },
//            saveArticle: function($event){
//                var button = $event.currentTarget;
//                var form = $(button).parents('form.edit-article').serializeObject();
//                var articleModel = new ArticleModel(form);
//                articleModel.save();
//            },
            addCategory: function($event){
                var groupId = $($event.currentTarget).parents('.group').data('id');
                var group = new GroupModel({id: groupId});
                //TODO || {async: false}
                group.fetch({async: false});
                var category = new CategoryModel({
                    group: group.toJSON()
                });
                var modal = new ModalWinView({
                    title: "Создание новой категории",
                    content: new EditCategoryView({
                        model: category
                    }),
                    buttons: [
                        {
                            'label': 'Сохранить',
                            'classes': 'btn-success close-modal',
                            'click': function(){
                                var categoryForm = $('form.edit-category')
                                    .serializeObject();
                                var category = new CategoryModel(categoryForm);
                                category.save();
                                console.log(categoryForm);
                            }
                        },
                        {
                            'label': 'Отмена',
                            'classes': 'btn-default close-modal'
                        }
                    ]
                });
            },
            changeCategory: function($event){
                var groupId = $($event.currentTarget).parents('.group-panel').data('id');
                var categoryId = $($event.currentTarget).data('id');
                var category = new CategoryModel();
                category.fetch();

                var modal = new ModalWinView({
                    title: "Редактирование категории",
                    content: new EditCategoryView({
                        model: category
                    })
                });
            }
        });
        return ManageArticleView;
    });