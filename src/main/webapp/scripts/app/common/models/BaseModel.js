define(['backbone', 'common/views/ModalWinView'],
    function (Backbone, ModalWinView) {
        var BaseModel = Backbone.Model.extend({
            initialize: function(){
                console.log('created BaseModel');
                this.on('error', function(model, resp, options){
                    console.log(model);
                    console.log(resp);
                    console.log(options);
                    if(resp.status == 500) new ModalWinView({
                        content: "Server error!",
                        buttons: [
                            {
                                'label': 'OK',
                                'classes': 'btn-primary close-modal'
                            }
                        ]
                    });
                });
            },
            url: function(){
                if(this.get('id')) return this.baseUrl + '/' + this.get('id');
                return this.baseUrl;
            },
            isNew: function() {
                //TODO | need refactoring
                if(this.get('id').length == 0){
                    return true;
                }else{
                    return false;
                }
            },
            save: function(options){
                options = options || {};
                options.url = options.url || this.baseUrl
                return Backbone.Model.prototype.save.call(this, null, options, null);
            },
            toJSON: function(options){
//                return _.clone(this.attributes);
                var json = {};
                for(var field in this.attributes){
                    var current = this.attributes[field];
                    if(current instanceof Backbone.Model ||
                        current instanceof Backbone.Collection){
                        json[field] = current.toJSON();
                    } else {
                        json[field] = current;
                    }
                }
                return json;
            }
        });
        return BaseModel;
    });