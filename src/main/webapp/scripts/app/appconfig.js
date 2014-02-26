require([], function () {


    return {
        restUrl: 'webservice/rest',
        url: {
            group: {
                base: this.baseRestUrl + '/group',
                all: this.url.group.base + '/all'
            }
        }
    };
});