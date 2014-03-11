define(['backbone', 'common/frames/BaseFrameView',
    'text!common/templ/mainFrameView.dust',
    "common/collections/GroupCollection", 'css!common/css/style'],
    function(Backbone, BaseFrameView, templateSource,
             GroupCollection){
    var MainFrameView = BaseFrameView.extend({
        template:{
            name: 'content.template',
            source: templateSource
        },
        events: {
            'click .menu a.category-link': 'onClickMenu',
            'click': 'onHideMenu'
        },
        className: 'main-frame app-frame',
        groups: new GroupCollection(),
        model: {},
        $content: {},
        initialize: function(){
            //TODO | {async: false}
            this.groups.fetch({async: false});
            this.model = new Backbone.Model({
                groups: this.groups.toJSON()
//                aromoShow: function(chunk, context, bodies,
//                                    params){
//                    if(params.groupId == 3){
//                        return chunk.render;
//                    }
//                }
            });
        },
        onClickMenu: function(event){
            var $openSubcategory = this.$el
                .find('ul.subcategories[style*="display: block"]');
            $openSubcategory.slideToggle();

            var $subcategories = $(event.target).parents('.category')
                .find('.subcategories');
            if($openSubcategory[0] != $subcategories[0]){
                $subcategories.slideToggle();
            }
        },
        onHideMenu: function(event){
//            var $subcategories = $(event.target).parents('.category')
//            $subcategories.slideToggle();
        }
    });
    return MainFrameView;
});