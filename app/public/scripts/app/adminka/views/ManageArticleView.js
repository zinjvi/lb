define(['backbone', 'backbone.relational','common/views/BaseView',
    'common/views/ModalWinView',
    'common/models/CategoryModel',
    'common/models/GroupModel',
    'text!adminka/templ/manageArticle.dust',
    'common/collections/GroupCollection',
    'adminka/views/ArticlesListView',
    'adminka/views/EditArticleView',
    'adminka/views/EditCategoryView',
    'css!adminka/css/styles'],
    function(Backbone, BacboneRelational, BaseView, ModalWinView,
             CategoryModel, GroupModel, templateSources, GroupCollection,
             ArticlesListView, EditArticleView, EditCategoryView){

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
                'click .articles-list': 'showArticleList',
                'click .change-article': 'changeArticle',
                'click .add-article': 'addArticle',
                'click .add-category': 'addCategory',
                'click .change-category': 'changeCategory'
            },
            // TODO | groups must be in model
            groups: new GroupCollection(),
            initialize: function(){
                console.log("new mav");
                this.model = completeModel();
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
                var groupId = $($event.currentTarget).data('id');
                var group = new GroupModel({_id: groupId});
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