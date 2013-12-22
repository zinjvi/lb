define(['backbone', 'common/views/BaseView', 'use!dust',
    'text!/templates/aromo/aromo.dust', 'aromo/views/ContentView',
    'aromo/collections/AromoCollection'],
    function(Backbone, BaseView, dust, templateSources,
             ContentView, AromoCollection){

        var AromoView = BaseView.extend({
            class: 'aromo-view',
            template:{
                name: 'aromo.template',
                source: templateSources
            },
            contentView: new ContentView(),
            aromos: new AromoCollection(),
            model: {},
            events: {
                'click .menu-item': 'showAromo'
            },
            initialize: function(){
                $('section.aromo').append(this.el);
                this.model = new Backbone.Model({
                    'aromos': this.aromos.toJSON()
                });
                this.render();
            },
            render: function(){
                this.$el.html(this.renderTemplate());
                return this;
            },
            showAromo: function(event){
                var id = event.target.id;
                var aromo = this.aromos.get(id);
                this.contentView.model = aromo;
                this.$el.find('.content')
                    .append(this.contentView.render().el);
            }
        });
        return AromoView;
    });
