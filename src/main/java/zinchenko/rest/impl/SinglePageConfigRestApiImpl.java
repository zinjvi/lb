package zinchenko.rest.impl;

import org.springframework.beans.factory.annotation.Autowired;
import zinchenko.domain.SinglePageConfig;
import zinchenko.rest.SinglePageConfigRestApi;
import zinchenko.service.SinglePageConfigService;

/**
 * User: zinchenko
 * Date: 16.03.14
 */
public class SinglePageConfigRestApiImpl
        implements SinglePageConfigRestApi {

    @Autowired
    SinglePageConfigService singlePageConfigService;

    @Override
    public SinglePageConfig get() {
        return singlePageConfigService.completeSinglePageConfig();
    }

    public SinglePageConfigService getSinglePageConfigService() {
        return singlePageConfigService;
    }

    public void setSinglePageConfigService(SinglePageConfigService singlePageConfigService) {
        this.singlePageConfigService = singlePageConfigService;
    }
}
