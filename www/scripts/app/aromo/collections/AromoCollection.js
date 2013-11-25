define(['use!backbone', 'aromo/models/AromoModel'], function(Backbone, AromoModel){
    var AromoCollection = Backbone.Collection.extend({
        model: AromoModel,
        url: '/aromo/list',
        initialize: function(){
            this.add([
                {'id': 1, 'name': 'tt1', 'text':'asdasdsa asdasdas asdasdad'},
                {'id': 2, 'name': 'tt2', 'text':'hgf htf fytfky lkuf ff'}
            ]);
        }
    });
    return AromoCollection;
});