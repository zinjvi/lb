define(['backbone'],
    function (Backbone) {
        var BaseModel = Backbone.Model.extend({
            initialize: function(){
                this.on('error', function(model, resp, options){
                    this.eventManager.trigger('server:error', resp);
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
//        BaseModel.prototype.on('error', function(model, resp, options){
//            this.eventManager.trigger('server:error', resp);
//        });
        return BaseModel;
    });