define(['use!backbone'], function(Backbone){
    var ForumView = Backbone.View.extend({
        initialize: function(){
            $('body').append(this.$el);
            this.render();
        },
        render: function(){
            this.$el.append('<div><b>asda</b></div>');
            return this;
        }
    });

    return ForumView;
});
