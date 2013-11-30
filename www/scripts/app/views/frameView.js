define(['use!backbone', 'common/views/base', 'text!/templates/frameView.dust',
    "collections/GroupCollection"],
    function(Backbone, BaseView, templateSource, GroupCollection){
    var View = BaseView.extend({
        template:{
            name: 'content.template',
            source: templateSource
        },
        className: 'main-frame app-frame',
        groups: new GroupCollection(),
        model: {},
        initialize: function(){
            this.model = new Backbone.Model({
                groups: this.groups.toJSON()
            });
            $('body').append(this.render().el);
        },
        render: function(){
            this.$el.html(this.renderTemplate());
            return this;
        }
    });
    return View;
});