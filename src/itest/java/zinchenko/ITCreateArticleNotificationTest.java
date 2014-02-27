package zinchenko;

import org.apache.activemq.broker.BrokerService;
import org.junit.After;
import org.junit.Before;

/**
 * User: zinchenko
 * Date: 27.02.14
 */
public class ITCreateArticleNotificationTest {

    BrokerService broker;

    @Before
    public void before() throws Exception {
        broker = new BrokerService();
        broker.addConnector("tcp://localhost:61616");
        broker.start();
    }

    @After
    public void after() throws Exception {
        broker.stop();
    }

}
