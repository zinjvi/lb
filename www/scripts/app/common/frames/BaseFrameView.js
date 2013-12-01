define(['use!backbone', 'common/views/BaseView',
    'text!/templates/mainFrameView.dust'],
    function(Backbone, BaseView, templateSource,
             GroupCollection){
        var BaseFrameView = BaseView.extend({
            className: 'app-frame',
            $content: {},
            render: function(){
                $('body').html('');
                this.$el.html(this.renderTemplate());
                this.$content = this.$el.find('.content');
                $('body').append(this.el);
            },
            setContent: function(view){
                this.$content.html('');
                this.$content.append(view.render().el);
            }
        });
        return BaseFrameView;
    });