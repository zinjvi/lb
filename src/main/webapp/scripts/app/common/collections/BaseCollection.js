define(['backbone'],
    function (Backbone) {

        var BaseCollection = Backbone.Collection.extend({
            initialize: function(){
                this.on('error', function(model, resp, options){
                    this.eventManager.trigger('server:error', resp);
                });
            },
            parse: function (response, options) {
                var list = [];
                _.each(response, function (response) {
                    var hash = this.model.prototype.parse(response);
                    list.push(new this.model(hash));
                }, this);
                return list;
            },
            toJSON: function(){
                var json = new Array();
                _.each(this.models, function(current){
                    if(current instanceof Backbone.Model ||
                        current instanceof Backbone.Collection){
                        json.push(current.toJSON());
                    } else {
                        json.push(current);
                    }
                }, this)
                return json;
            }
        });
//        BaseCollection.prototype.on('error', function(model, resp, options){
//            this.eventManager.trigger('server:error', resp);
//        });
        return BaseCollection;
    });