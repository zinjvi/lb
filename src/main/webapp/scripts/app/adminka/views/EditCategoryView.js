define(['common/views/BaseView',
    'common/models/BaseModel',
    'common/models/CategoryModel',
    'text!adminka/templ/editCategory.dust', 'jquery.formparams'],
    function(BaseView, BaseModel, CategoryModel, templateSources){

        var EditCategoryView = BaseView.extend({
            template:{
                name: 'editCategory.template',
                source: templateSources
            },
            events: {
                'click .save-category': 'saveCategory'
            },
            initialize: function(options){
                console.log('i');
                this.model = new BaseModel({
                    groups: options.groups,
                    group: options.group,
                    category: options.category
                });
            },
            saveCategory: function($event){
                var categoryJson = this.$el.find('form.edit-category')
                    .formParams();
                console.log(categoryJson);
                var category = new CategoryModel(categoryJson);
                var self = this;
                category.save({
                    success: function(model, response, options){
                        console.log(model);
                        self.eventManager.trigger('modal:close');
                    },
                    error: function(){
                        //TODO
                        console.log('error');
                    }
                });
            }
        });
        return EditCategoryView;
    });