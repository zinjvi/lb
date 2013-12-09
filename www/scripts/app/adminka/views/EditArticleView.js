define(['common/views/BaseView', 'use!dust',
    'text!adminka/templ/editArticle.dust', 'modelBinder',
    'article/models/ArticleModel', 'jquery', 'jquery.validate', 'jquery.serializeObject'],
    function(BaseView, dust, templateSources, ModelBinder,
             ArticleModel, $){

        var EditArticleView = BaseView.extend({
            className: 'edit-adticle-view',
            template:{
                name: 'editArticle.template',
                source: templateSources
            },
            events: {
                'submit form.edit-article': 'saveArticle'
            },
            $form: undefined,
            initialize: function(){
                Backbone.ModelBinder.SetOptions({
                    changeTriggers: {
                        '': '',
                        'button': 'click'
                    }
                });
                this.modelBinder = new ModelBinder();
                this.model = new ArticleModel();
                this.model.on('change', function(){
                    console.log("ch");
                })
            },
            afterRender: function(){
                this.modelBinder.bind(this.model, this.$('form.edit-article'));
                this.$el.find('form.edit-article').validate();
                this.$form = this.$el.find('form.edit-article');
            },
            saveArticle: function(event){
                event.preventDefault();
                this.model.set(this.$form.serializeObject());
            }
        });
        return EditArticleView;
    });