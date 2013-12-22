define(['aromo/views/AromoView'], function(AromoView){
    var application = {
        aromoView: {},
        start: function(){
            console.log('start');
            this.aromoView = new AromoView();
        }
    }
    return application;
});
