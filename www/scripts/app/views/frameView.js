define(['common/views/base', 'text!/templates/frameView.dust'],
    function(BaseView, templateSource){
    var View = BaseView.extend({
        template:{
            name: 'content.template',
            source: templateSource
        },
        className: 'main-frame app-frame',
        initialize: function(){
            $('body').append(this.render().el);
        },
        render: function(){
            this.$el.html(this.renderTemplate());
            return this;
        }
    });
    return View;
});