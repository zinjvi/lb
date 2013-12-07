define(['use!backbone'],
    function (Backbone) {
        var self = {};

        var BaseCollection = Backbone.Collection.extend({
            parse: function (response) {
                self = this;
                var list = [];
                _.each(response, function (val) {
                    list.push(new self.model(val));
                });
                return list;
            }
        });
        return BaseCollection;
    });