define(['adminka/frames/AdminkaFrameView',
    'adminka/views/IndexView',
    'adminka/views/ManageArticleView'],
    function(AdminkaFrameView, IndexView, ManageArticleView){
    return {
        'adminka': function(){
            var Frame = AdminkaFrameView;
            console.log("rout: '#adminka'");
            this.setView(new IndexView(), Frame);
        },
        'adminka/article': function(){
            var Frame = AdminkaFrameView;
            console.log("rout: '#adminka/article'");
            this.setView(new ManageArticleView(), Frame);
        }
    }
});
