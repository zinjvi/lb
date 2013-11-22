define(['scripts/app/forum/views/base', 'use!dust', 'text!templates/temp.dust'],
    function(BaseView, dust, templateSources){

    var PostView = BaseView.extend({
        class: 'post-view',
        template:{
            name: '',
            source: templateSources
        },
        initialize: function(){

        },
        render: function(){
            var string = '<p><b>{name}</b></p>';

            var compiled = dust.compile(string, 'template.name');
            dust.loadSource(compiled);

            this.$el.html('<p><b>!</b></p>');
            return this;
        }
    });
    return PostView;
});
