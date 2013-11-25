define(['jquery', 'underscore', 'forum/models/PostModel',
    'forum/views/PostView',
    'forum/views/ForumView'],
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