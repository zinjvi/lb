define(['common/frames/MainFrameView',
    'article/views/IndexView',
    'article/views/ArticlesListView',
    'article/views/ArticleView'],
    function(MainFrameView, IndexView, ArticlesListView,
             ArticleView){
    return {
        '': function () {
            var Frame = MainFrameView;
            this.setView(new IndexView(), Frame);
        },
        'articlesList/:categoryId': function (categoryId) {
            var Frame = MainFrameView;
            this.setView(new ArticlesListView({
                categoryId: categoryId
            }), Frame);
        },
        'article/:articleId': function (articleId) {
            var Frame = MainFrameView;
            var View = ArticleView;
            this.setView(new ArticleView({
                articleId: articleId
            }), Frame);
            scrollTo(0, 340);
        }
    }
});
