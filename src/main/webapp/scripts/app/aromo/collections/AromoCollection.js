define(['common/collections/BaseCollection', 'underscore',
    'aromo/models/AromoModel', 'jquery'],
    function (BaseCollection, _, AromoModel, $) {
        var self;
        var env;
        var AromoCollection = BaseCollection.extend({
            model: AromoModel,
            url: '/aromo/list',
            initialize: function () {
                self = this;
//            this.fetch({async: true});
                console.log("end initialize()");
                this.fetch({async: false});
            },
            parse: function (response) {
                console.table(response);
                var list = [];
                _.each(response, function (val) {
                    list.push(new AromoModel(val));
                });
                return list;
            }
        });
        return AromoCollection;
    });