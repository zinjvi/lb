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
            /**
             * @param options.groups
             * @param options.group
             * @param options.category
             */
            initialize: function(options){
                this.options = options;
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
                var category = new CategoryModel(categoryJson, {parse:true});
                var self = this;
                category.save({
                    success: function(model, response, options){
                        console.log(model);
                        self.eventManager.trigger('modal:close');
                        if(model.get('id')) {
                            var previousGroupId = self.options.group.get('id');
                            self.eventManager.trigger(
                                'manageArticle:updateCategory', model, previousGroupId);
                        } else {
                            model.set('id', response);
                            self.eventManager.trigger('manageArticle:addCategoryOnUI', model);
                        }
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