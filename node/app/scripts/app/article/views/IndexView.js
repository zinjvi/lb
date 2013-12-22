define(['common/views/BaseView',
    'text!article/templ/index.dust'],
    function(BaseView, templateSources){

        var IndexView = BaseView.extend({
            template:{
                name: 'index.template',
                source: templateSources
            },
            initialize: function(){

            }
        });
        return IndexView;
    });
