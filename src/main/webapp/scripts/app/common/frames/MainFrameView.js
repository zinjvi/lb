define(['backbone', 'common/frames/BaseFrameView',
    'text!common/templ/mainFrameView.dust',
    "common/collections/GroupCollection", 'css!common/css/style'],
    function (Backbone, BaseFrameView, templateSource, GroupCollection) {
        var MainFrameView = BaseFrameView.extend({
            template: {
                name: 'content.template',
                source: templateSource
            },
            events: {
                'click .group a.category-link': 'onClickMenu',
                'click': 'onHideMenu'
            },
            className: 'main-frame app-frame',
            groups: new GroupCollection(),
            model: {},
            $content: {},
            beforeRender: function(){
                //TODO | {async: false}
                this.groups.fetch({async: false});
                this.model = new Backbone.Model({
                    groups: this.groups.toJSON()
                });
            },
            initialize: function () {

            },
            onClickMenu: function (event) {
                var $openSubcategory = this.$el
                    .find('.categories[style*="display: block"]');
                $openSubcategory.slideToggle();

                var $subcategories = $(event.target).parents('.group')
                    .find('.categories');
                if ($openSubcategory[0] != $subcategories[0]) {
                    $subcategories.slideToggle();
                }
            },
            onHideMenu: function ($event) {
//                console.log("*");
//                var targetCategories = $($event.currentTarget).parents('categories');
//                if (!targetCategories.length) {
//                    $('.categories[style*="display: block"]').slideToggle();
//                }
            }
        });
        return MainFrameView;
    });