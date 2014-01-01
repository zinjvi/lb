define(['common/views/BaseView', 'common/models/CategoryModel',
    'text!adminka/templ/editCategory.dust'],
    function(BaseView, CategoryModel, templateSources){

        var EditCategoryView = BaseView.extend({
            template:{
                name: 'editCategory.template',
                source: templateSources
            },
            events: {

            },
            initialize: function(options){
            }
        });
        return EditCategoryView;
    });