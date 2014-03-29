define(['backbone', 'common/views/BaseView'],
    function(Backbone, BaseView){
        var BaseFrameView = BaseView.extend({
            $content: {},
            render: function(){
                if(!$('#frame-panel').length){
                    $('<div/>').attr('id', 'frame-panel')
                        .appendTo('body');
                }
                this.$framePanel = $('#frame-panel');
                this.$framePanel.html('');
                BaseView.prototype.renderTo.call(this, this.$framePanel);
                this.$content = this.$el.find('.content-block');
            },
            setContent: function(view){
                this.$content.html('');
                this.$content.append(view.render().el);
            }
        });
        return BaseFrameView;
    });