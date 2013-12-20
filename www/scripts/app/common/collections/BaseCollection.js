define(['backbone'],
    function (Backbone) {
        var self = {};

        var BaseCollection = Backbone.Collection.extend({
            parse: function (response, options) {
                console.log("BaseCollection.parse()");
                var list = [];
                _.each(response, function (val) {
                    list.push(new this.model(val));
                }, this);
                return list;
            }
        });
        return BaseCollection;
    });