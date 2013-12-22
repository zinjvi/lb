define(['underscore', 'backbone', 'common/views/BaseView',
    'text!common/templ/modalWin.dust'],
    function(_, Backbone, BaseView, templateSources){

        var completeModel = function(options){
            if(options.content instanceof Backbone.View){
                options.content = options.content.render().$el.html();
            }
            return new Backbone.Model(options);
        }
        
        var assigneCallbacks = function(options, events){
            if(!options.buttons){
                return;
            }
            for (var i = 0; i < options.buttons.length; i++) {
                var button = options.buttons[i];
                if(button.click){
                    events['click .modal-btn-'+i] = button.click;
                }
            }
        }

        /**
         *
         * For example:

         var modal = new ModalWinView({
                    title: "title test",
                    content: "content test",
                    buttons: [
                        {
                            'label': 'Closable First',
                            'classes': 'btn-default close-modal'
                        },
                        {
                            'label': 'Second',
                            'classes': 'btn-primary close-modal',
                            'click': function(){
                                console.log("cl second");
                            }
                        }
                    ]
                });
         *
         */

        var ModalWinView = BaseView.extend({
            className: '_modal-win-panel',
            template:{
                name: 'modalWin.template',
                source: templateSources
            },
            events:{
                'click .modal-dialog': 'closeModal'
            },
            initialize: function(options){
                var defaultOptions = {
                    close: true
                }
                _.extend(defaultOptions, options)
                this.model = completeModel(defaultOptions);
                assigneCallbacks(options, this.events);
                
                this.render();
                var self = this;
                this.$el.find('.modal').on('hidden.bs.modal', function () {
                    self.remove();
                    self.$el.remove();
                })
                this.show();
            },
            render: function(){
                this.$el.html(this.renderTemplate());
                if(!$('#single-modal-panel').length){
                    $('<div/>').attr('id', 'single-modal-panel')
                        .appendTo('body');
                }
                this.$el.appendTo('#single-modal-panel');
            },
            /**
             *
             */
            show: function(options){
                this.$el.find('.modal').modal('show');
            },
            hide: function(){
                this.$el.modal('hide');
            }
        });

        ModalWinView.prototype.CONTAINER_ID = 'single-modal-panel';

        return ModalWinView;
    });