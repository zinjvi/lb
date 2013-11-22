define(['jquery', 'underscore', 'scripts/app/forum/models/post',
    'scripts/app/forum/views/post',
    'scripts/app/forum/views/forum'],
    function($, _, Post, PostView, ForumView){

    return {
        view: new ForumView(),

        start: function(){


            var model = new Post({
                title: 'asdasd'
            });
            var pv = new PostView({model: model});
            console.log(pv.render().el);
        }
    }
});