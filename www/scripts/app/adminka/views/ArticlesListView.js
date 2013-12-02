define(['common/views/BaseView',
    'text!adminka/templ/articlesList.dust'],
    function(BaseView, templateSources){

        var ArticlesListView = BaseView.extend({
            template:{
                name: 'articlesList.template',
                source: templateSources
            },
            initialize: function(){

            }
        });
        return ArticlesListView;
    });