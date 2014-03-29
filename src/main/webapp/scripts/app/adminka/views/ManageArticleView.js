define(['backbone',
    'article/singlePageConfig',
    'common/views/BaseView',
    'common/views/ModalWinView',
    'common/models/BaseModel',
    'common/models/CategoryModel',
    'common/models/GroupModel',
    'article/models/ArticleModel',
    'text!adminka/templ/manageArticle.dust',
    'common/collections/GroupCollection',
    'adminka/views/ArticlesListView',
    'adminka/views/EditArticleView',
    'adminka/views/EditCategoryView',
    'css!adminka/css/styles'],
    function(Backbone, singlePageConfig,
             BaseView, ModalWinView, BaseModel,
             CategoryModel, GroupModel, ArticleModel, templateSources,
             GroupCollection, ArticlesListView, EditArticleView,
             EditCategoryView){

        var completeModel = function(){
            var groups = new GroupCollection();
            //TODO |
            groups.fetch({async: false});
            var model = new BaseModel({
                groups: groups
            });
            return model;
        }

        var completeM = function(){
            var groups = new GroupCollection();
            groups.fetch({async: false});
            var m = new BaseModel({
                groups: groups
            });
            console.log(m);
            console.log(m.toJSON());
            return m
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
                'click .add-category': 'addCategory'
            },
            className: 'manage-article',
            // TODO | groups must be in model
            groups: new GroupCollection(),
            initialize: function(){
                console.log(singlePageConfig);
                console.log("new mav");
                this.model = completeModel();
                this.m = completeM();
                this.eventManager.on('clean:article:content', this.cleanArticleContent, this);
                this.eventManager.on('manageArticle:updateCategory', this.updateCategory, this);
                this.eventManager.on('manageArticle:addCategoryOnUI', this.addCategoryOnUI, this);
                this.eventManager.on('manageArticle:removeCategoryOnUI', this.removeCategoryOnUI, this);
            },
            afterRender: function(){
                this.$article = this.$el.find('.article-content');
            },
            cleanArticleContent: function(){
                this.$article.html('');
            },
            updateCategory: function(updatedCategory, previousGroupId){
                console.log('updateCategory');
                console.log(updatedCategory);
                var toGroupId = updatedCategory.get('group').id;
                if(previousGroupId != updatedCategory.get('group').id){
                    var groups = this.model.get('groups');
                    var categories = groups.get(previousGroupId).get('categories');
                    var category = categories.get(updatedCategory.get('id'));
                    categories.remove(category);
                    var toGroup = groups.get(toGroupId);
                    toGroup.get('categories').add(category);
                }
                var category = this.model.get('groups').get(toGroupId)
                    .get('categories').get(updatedCategory.get('id'));
                category.set('name', updatedCategory.get('name'));
                this.render();
            },
            addCategoryOnUI: function(category){
                console.log(category);
                var groupId = category.get('group').id;
                var group = this.model.get('groups').get(groupId);
                group.get('categories').add(category);
                this.render();
            },
            removeCategoryOnUI: function(groupId, categoryId){
                var group = this.model.get('groups').get(groupId);
                group.get('categories').remove(categoryId);
                this.render();
            },
            showArticleList: function(event) {
                var target = event.target;
                var groupId = $(target).parents('.group').data('id');
                var categoryId = $(target).data('id');
                var articlesListView = new ArticlesListView({
                    groups: this.model.get('groups'),
                    groupId: groupId,
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
                this.$article.html('');
                this.$article.append(editArticleView.el);
            },
            addArticle: function($event){
                console.log("add article");
                var target = $event.currentTarget;
                var editArticleView = new EditArticleView({
                    categoryId: $(target).data('category-id')
                });
                editArticleView.render();
                this.$article.html('');
                this.$article.append(editArticleView.el);
            },
            addCategory: function($event){
                var $target = $($event.currentTarget);
                var groups = this.model.get('groups');
                var groupId = $target.parents('.group').data('id');
                var group = groups.get(groupId);
                var category = group.get('categories').get($target.data('id'));
                var modal = new ModalWinView({
                    title: "Редактирование категории",
                    content: new EditCategoryView({
                        groups: groups,
                        group: group,
                        category: category
                    })
                });
            }
        });
        return ManageArticleView;
    });