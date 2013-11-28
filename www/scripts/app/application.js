define(['views/FrameView'], function(FrameView){
    var application = {
        frameView: new FrameView(),
        start: function(){
            console.log("s");
        }
    }

    return application;
});