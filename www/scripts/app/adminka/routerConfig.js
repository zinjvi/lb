define(['adminka/frames/AdminkaFrameView',
    'adminka/views/IndexView',
    'adminka/views/ManageArticleView',
    'adminka/views/ManageCategoryView'],
    function(AdminkaFrameView, IndexView, ManageArticleView,
             ManageCategoryView){
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
        },
        'adminka/category': function(){
            var Frame = AdminkaFrameView;
            console.log("rout: '#adminka/category'");
            this.setView(new ManageCategoryView(), Frame);
        }
    }
});
