define(['scripts/app/forum/views/base', 'use!dust', 'text!templates/content.dust', 'scripts/app/forum/collections/PostCollection'],
    function(BaseView, dust, templateSources, PostCollection){

        var ContentView = BaseView.extend({
            class: 'post-view',
            template:{
                name: 'content.template',
                source: templateSources
            },
            posts: new PostCollection(),
            initialize: function(){
                this.listenTo(this.posts, 'add', this.addPost)

                this.posts.add({title:'t1'});
                this.posts.add({title:'t2'});
                this.posts.add({title:'t3'});

            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            },
            addPost: function(post){
                console.log('add:');
                console.log(post);
            }
        });
        return ContentView;
    });
