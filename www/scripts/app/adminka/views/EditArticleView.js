define(['common/views/BaseView', 'use!dust',
    'text!adminka/templ/editArticle.dust'],
    function(BaseView, dust, templateSources){

        var EditArticleView = BaseView.extend({
            template:{
                name: 'editArticle.template',
                source: templateSources
            },
            initialize: function(){

            }
        });
        return EditArticleView;
    });