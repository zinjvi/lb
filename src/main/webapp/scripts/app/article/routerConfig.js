define(['common/frames/MainFrameView',
    'article/views/IndexView',
    'article/views/ArticlesListView',
    'article/views/ArticleView'],
    function(MainFrameView, IndexView, ArticlesListView,
             ArticleView){
    return {
        '': function () {
            var Frame = MainFrameView;
            console.log("index");
            this.setView(new IndexView(), Frame);
        },
        'articlesList/:categoryId': function (categoryId) {
            var Frame = MainFrameView;
            console.log("articles list");
            this.setView(new ArticlesListView({
                categoryId: categoryId
            }), Frame);
        },
        'article/:articleId': function (articleId) {
            var Frame = MainFrameView;
            var View = ArticleView;
            console.log("article");
            this.setView(new ArticleView({
                articleId: articleId
            }), Frame);
//                this.frame.setContent(new ArticleView({
//                    articleId: articleId
//                }))
            scrollTo(0, 340);
        }
    }
});
