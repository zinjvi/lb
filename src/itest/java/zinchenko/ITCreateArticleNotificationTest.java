package zinchenko;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.activemq.broker.BrokerService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import zinchenko.domain.Article;

import javax.jms.Connection;
import javax.jms.ConnectionFactory;
import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageConsumer;
import javax.jms.MessageProducer;
import javax.jms.ObjectMessage;
import javax.jms.Session;

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

    private static String url = "tcp://localhost:61616";
    private static String subject = "mailerQueue";

    @Test
    public void test() throws Exception {
        send();
        //receive();
        Object o = JmsUtils.receiveObject(url, subject);
    }

    private void receive() throws JMSException {
        ConnectionFactory connectionFactory = new ActiveMQConnectionFactory(url);
        Connection connection = connectionFactory.createConnection();
        connection.start();

        Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        Destination destination = session.createQueue(subject);
        MessageConsumer consumer = session.createConsumer(destination);

        Message message = consumer.receive();
        if (message instanceof ObjectMessage) {
            ObjectMessage objectMessage = (ObjectMessage) message;
            Article body = (Article) objectMessage.getObject();
            System.out.println(body);
        }

        connection.close();
    }

    private void send() throws JMSException {
        ConnectionFactory connectionFactory = new ActiveMQConnectionFactory(url);
        Connection connection = connectionFactory.createConnection();
        connection.start();

        Session session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        Destination destination = session.createQueue(subject);

        MessageProducer producer = session.createProducer(destination);
        Article article = new Article();
        article.setId(12L);
        article.setTitle("title");
        ObjectMessage objMessage = session.createObjectMessage(article);

        producer.send(destination, objMessage);
        System.out.println("Sent message ObjectMessage");

        connection.close();
    }

    @After
    public void after() throws Exception {
        broker.stop();
    }

}
