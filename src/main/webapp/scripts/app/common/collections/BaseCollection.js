define(['backbone'],
    function (Backbone) {
        var self = {};

        var BaseCollection = Backbone.Collection.extend({
            parse: function (response, options) {
                console.log("BaseCollection.parse()");
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
        return BaseCollection;
    });