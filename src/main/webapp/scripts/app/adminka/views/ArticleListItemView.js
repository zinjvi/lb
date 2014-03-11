define(['common/views/BaseView',
    'text!adminka/templ/articleListItem.dust',
    'common/views/ConfirmWinView'],
    function(BaseView, templateSources,
             ConfirmWinView){

        var SomeView = BaseView.extend({
            tagName: 'li',
            className: 'article-list-item list-group-item',
            template:{
                name: 'articleListItem.template',
                source: templateSources
            },
            events: {
                'click .remove-article': 'removeArticle'
            },
            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },
            removeArticle: function () {
                var self = this;
                new ConfirmWinView({
                        content: 'Вы действительно хотите удалить статью?'
                    },
                    function () {
                        console.log("destr");
                        self.model.destroy();
                        // TODO |  error handler
                        self.remove();
                    }
                );
            }
        });
        return SomeView;
    });