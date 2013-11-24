define(['aromo/views/AromoView'], function(AromoView){
    var application = {

        start: function(){
            console.log('start');
            new AromoView();
        }
    }
    return application;
});
