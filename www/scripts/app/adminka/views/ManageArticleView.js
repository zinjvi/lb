define(['use!backbone', 'common/views/BaseView',
    'common/views/ModalWinView',
    'text!adminka/templ/manageArticle.dust',
    'common/collections/GroupCollection',
    'adminka/views/ArticlesListView',
    'adminka/views/EditArticleView',
    'adminka/views/EditCategoryView',
    'css!adminka/css/styles'],
    function(Backbone, BaseView, ModalWinView, templateSources,
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
                'click .add-category': 'addCategory'
            },
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
                var modal = new ModalWinView({
                    title: "Создание новой категории",
                    content: new EditCategoryView({
                        groupId: groupId
                    })
                });
            }
        });
        return ManageArticleView;
    });