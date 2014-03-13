define(['common/views/BaseView',
    'common/models/BaseModel',
    'common/models/CategoryModel',
    'text!adminka/templ/editCategory.dust'],
    function(BaseView, BaseModel, CategoryModel, templateSources){

        var EditCategoryView = BaseView.extend({
            template:{
                name: 'editCategory.template',
                source: templateSources
            },
            events: {

            },
            initialize: function(options){
                this.model = new BaseModel({
                    groups: options.groups,
                    group: options.group,
                    category: options.category
                });
            }
        });
        return EditCategoryView;
    });