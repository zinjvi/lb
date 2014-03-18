package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zinchenko.domain.SinglePageConfig;
import zinchenko.domain.SystemSinglePageConfig;
import zinchenko.service.SinglePageConfigService;

@Service
public class SinglePageConfigServiceImpl
        implements SinglePageConfigService{

    @Autowired
    SystemSinglePageConfig systemSinglePageConfig;

    @Override
    public SinglePageConfig completeSinglePageConfig() {
        SinglePageConfig singlePageConfig = new SinglePageConfig();
        singlePageConfig.setSystemSinglePageConfig(systemSinglePageConfig);
        return singlePageConfig;
    }
}
