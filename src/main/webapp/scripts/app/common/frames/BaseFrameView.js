define(['backbone', 'common/views/BaseView'],
    function(Backbone, BaseView){
        var BaseFrameView = BaseView.extend({
            $content: {},
            render: function(){
                if(!$('#frame-panel').length){
                    $('<div/>').attr('id', 'frame-panel')
                        .appendTo('body');
                }
                $('#frame-panel').html('');
                this.$el.html(this.renderTemplate());
                this.$el.appendTo('#frame-panel');
                this.$content = this.$el.find('.content-block');
            },
            setContent: function(view){
                this.$content.html('');
                this.$content.append(view.render().el);
            }
        });
        return BaseFrameView;
    });