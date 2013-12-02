define(['use!backbone', 'common/views/BaseView',
    'text!adminka/templ/manageArticle.dust',
    'common/collections/GroupCollection',
    'adminka/views/ArticlesListView'],
    function(Backbone, BaseView, templateSources,
        GroupCollection, ArticlesListView){

        var completeModel = function(){
            var groups = new GroupCollection();
            var model = new Backbone.Model({
                groups: groups.toJSON()
            });

            return model;
        }

        var ManageArticleView = BaseView.extend({
            template:{
                name: 'manageArticle.template',
                source: templateSources
            },
            events: {
                'click .articles-list': 'showArticleList'
            },
            model: completeModel(),
            initialize: function(){

            },
            showArticleList: function(event){
                var target = event.target;
                console.log("list art: "+target.id);
                var articlesListView = new ArticlesListView();
                var selector = '#category_'+target.id+' .panel-body';
                var $destPanelBody = this.$el.find(selector);
                $destPanelBody.append(articlesListView.render().el);
            }
        });
        return ManageArticleView;
    });