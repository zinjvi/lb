require([], function () {

    var config = {};
    config.restUrl = 'webservice/rest';
    config.url = {};
    config.url.group = {};
    config.url.group.base = config.restUrl + '/group';
    config.url.group.base.all = config.url.group.base + '/all';

    return config;


    //TODO | how can y do this?
//    return {
//        restUrl: 'webservice/rest',
//        url: {
//            group: {
//                base: this.baseRestUrl + '/group',
//                all: this.url.group.base + '/all'
//            }
//        }
//    };
});