define(['common/views/BaseView',
    'text!adminka/templ/editArticle.dust',
    'article/models/ArticleModel', 'jquery', 'jquery.validate', 'jquery.serializeObject'],
    function(BaseView, templateSources,
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
            initialize: function(options){
                if (options && options.articleId) {
                    this.model = new ArticleModel({
                        id: options.articleId
                    });
                    this.model.fetchById();
                }else{
                    this.model = new ArticleModel();
                }
//
//
//                this.model.on('change', function(){
//                    console.log("ch");
//                })
            },
            afterRender: function(){
                $.validator.setDefaults({
                    errorPlacement: function(error, element){
                        console.log("error");
                        console.log(error);
                        console.log(element);
                    }
                })
                this.$el.find('form.edit-article').validate();
                this.$form = this.$el.find('form.edit-article');
            },
            saveArticle: function(event){
                event.preventDefault();
                this.model.set(this.$form.serializeObject());
                this.model.save();
            }
        });
        return EditArticleView;
    });