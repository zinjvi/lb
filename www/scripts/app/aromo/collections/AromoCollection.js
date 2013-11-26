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