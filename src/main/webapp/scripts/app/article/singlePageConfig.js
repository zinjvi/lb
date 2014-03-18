define(['underscore', 'article/models/ConfigModel'],


    /**
     *
     * @returns {
     *     system:{
     *          articleImagePath: "/xx/xxxx/"
     *     }
     * }
     */
    function(_, ConfigModel){

    var configModel = new ConfigModel();
    configModel.fetch({async: false});

    var config = {};
    config.system = configModel.attributes.systemSinglePageConfig;
    return config
});