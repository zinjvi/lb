define(['common/views/BaseView',
    'text!adminka/templ/manageCategory.dust'],
    function(BaseView, templateSources){

        var ManageCategoryView = BaseView.extend({
            template:{
                name: 'manageCategory.template',
                source: templateSources
            },
            initialize: function(){

            }
        });
        return ManageCategoryView;
    });
