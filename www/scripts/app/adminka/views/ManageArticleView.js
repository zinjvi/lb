define(['backbone', 'common/views/BaseView',
    'common/views/ModalWinView',
    'common/models/CategoryModel',
    'text!adminka/templ/manageArticle.dust',
    'common/collections/GroupCollection',
    'adminka/views/ArticlesListView',
    'adminka/views/EditArticleView',
    'adminka/views/EditCategoryView',
    'css!adminka/css/styles'],
    function(Backbone, BaseView, ModalWinView, CategoryModel, templateSources,
        GroupCollection, ArticlesListView, EditArticleView,
        EditCategoryView){

        var completeModel = function(){
            var groups = new GroupCollection();
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
                'click .articles-list': 'showArticleList',
                'click .change-article': 'changeArticle',
                'click .add-article': 'addArticle',
                'click .add-category': 'addCategory',
                'click .change-category': 'changeCategory'
            },
            // TODO | groups must be in model
            groups: new GroupCollection(),
            model: completeModel(),
            initialize: function(){

            },
            showArticleList: function(event){
                var target = event.target;
                console.log("list art: "+target.id);

                var selector = '#category_'+target.id+' .panel-body';
                var $destPanelBody = this.$el.find(selector);

                if(isCurrentTagOpened(this, target)){
                    console.log('o');
                    $destPanelBody.html('');
                }else{
                    var articlesListView = new ArticlesListView({
                        categoryId: target.id
                    });
                    $destPanelBody.append(articlesListView.render().el);
                }
            },
            changeArticle: function($event){
                var editArticleView = new EditArticleView({
                    articleId: $event.currentTarget.id
                });
                editArticleView.render();
                this.$el.find('.right-panel')
                    .append(editArticleView.el);
            },
            addArticle: function($event){
                console.log("add article");
                var editArticleView = new EditArticleView();
                editArticleView.render();
                this.$el.find('.right-panel')
                    .append(editArticleView.el);
            },
            addCategory: function($event){
                var groupId = $($event.currentTarget).data('id')
                var category = new CategoryModel({
                    group:{
                        id: groupId
                    }
                });
                var modal = new ModalWinView({
                    title: "Создание новой категории",
                    content: new EditCategoryView({
                        model: category
                    })
                });
            },
            changeCategory: function($event){
                var groupId = $($event.currentTarget).parents('.group-panel').data('id');
                var categoryId = $($event.currentTarget).data('id');
                var category = this.groups.get(groupId).get('categories')[categoryId];

                var modal = new ModalWinView({
                    title: "Редактирование категории",
                    content: new EditCategoryView({
//                        model: category
                    })
                });
            }
        });
        return ManageArticleView;
    });