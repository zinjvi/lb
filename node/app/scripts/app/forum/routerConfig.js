define(['adminka/frames/AdminkaFrameView',
    'adminka/views/IndexView',
    'adminka/views/ManageArticleView'],
    function(AdminkaFrameView, IndexView, ManageArticleView){
    return {
        'forum': function(){
            var Frame = AdminkaFrameView;
            console.log("rout: '#adminka'");
            this.setView(new IndexView(), Frame);
        }
    }
});
