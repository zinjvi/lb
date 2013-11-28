<<<<<<< Updated upstream
define(['common/collections/BaseCollection', 'use!underscore',
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
=======
define(['use!backbone', 'aromo/models/AromoModel'], function(Backbone, AromoModel){
    var self;
    var AromoCollection = Backbone.Collection.extend({
        model: AromoModel,
        url: '/aromo/list',
        initialize: function(){
            self = this;
            this.add([
                {'id': 1, 'name': 'tt1', 'text':'asdasdsa asdasdas asdasdad'},
                {'id': 2, 'name': 'tt2', 'text':'hgf htf fytfky lkuf ff'}
            ]);
            this.l();
        },
        l: function(){
            this.fetch({
                async: false,
                success: function(collection, response) {
                    self.models = collection;
                }
            });
        }
    });
    return AromoCollection;
});
>>>>>>> Stashed changes
