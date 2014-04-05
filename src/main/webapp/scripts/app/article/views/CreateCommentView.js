define(['log', 'common/models/BaseModel',
    'article/models/CommentModel',
    'common/views/BaseView',
    'text!article/templ/createComment.dust'],
    function (log, BaseModel, CommentModel,
              BaseView, templateSources) {

        var CreateCommentView = BaseView.extend({
            className: '_createCommentView',
            template: {
                name: 'createComment.template',
                source: templateSources
            },
            events: {
                'click ._addComment': 'addComment'
            },
            /**
             * @param options.articleId
             */
            initialize: function (options) {
                this.articleId = options.articleId;
                this.model = new BaseModel({
                    articleId: this.articleId,
                    saving: false
                });
                this.model.on('change', this.render, this);
            },
            beforeRender: function () {

            },
            afterRender: function () {
                this.$form = this.$el.find('form');
            },
            addComment: function ($event) {
                var self = this;
                var formValues = this.$form.formParams();
                var comment = new CommentModel(formValues);
                this.model.set(formValues, {silent: true});
                this.model.set('saving', true);
                comment.save({
                    success: function (model, response) {
                        self.eventManager.trigger('article:addComment', comment);
                        self.model.unset('content', {silent: true});
                        self.model.set('saving', false);
                        log.debug('Comment "' + model.get('content') + '" added.');
                    }
                });
            }
        });
        return CreateCommentView;
    });