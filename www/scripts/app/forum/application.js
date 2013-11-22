define(['jquery', 'underscore', 'scripts/app/forum/models/post',
    'scripts/app/forum/views/view.post',
    'scripts/app/forum/views/view.forum'],
    function($, _, Post, PostView, ForumView){

    return {
        view: new ForumView(),

        start: function(){
            console.log("start");
            console.log($('body'));

            var pv = new PostView();
            console.log(pv.render().el);
        }
    }
});