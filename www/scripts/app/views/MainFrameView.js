define(['use!backbone', 'common/views/base', 'text!/templates/mainFrameView.dust',
    "collections/GroupCollection"],
    function(Backbone, BaseView, templateSource, GroupCollection){
    var View = BaseView.extend({
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
            this.model = new Backbone.Model({
                groups: this.groups.toJSON(),
                aromoShow: function(chunk, context, bodies,
                                    params){
                    if(params.groupId == 3){
                        return chunk.render;
                    }
                }
            });
        },
        render: function(){
            this.$el.html(this.renderTemplate());
            this.$content = this.$el.find('.content');
            $('body').append(this.el);
        },
        setContent: function(view){
            this.$content.html('');
            this.$content.append(view.render().el);
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
    return View;
});