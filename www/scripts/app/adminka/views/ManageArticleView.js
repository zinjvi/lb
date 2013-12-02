define(['common/views/BaseView',
    'text!adminka/templ/manageArticle.dust'],
    function(BaseView, templateSources){

        var ManageArticleView = BaseView.extend({
            template:{
                name: 'manageArticle.template',
                source: templateSources
            },
            initialize: function(){

            }
        });
        return ManageArticleView;
    });