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
                console.log("ititialize");
                // TODO | need choose to deep model
                this.model = new CategoryModel({group_id: options.groupId});
//                var group = this.modal.get('group');
//                group.set('id', options.groupId);
//                this.modal.set('group', group);
            }
        });
        return EditCategoryView;
    });