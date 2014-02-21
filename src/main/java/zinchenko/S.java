package zinchenko;

import org.h2.tools.Server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class S {

    public static void main(String[] args) throws SQLException, InterruptedException {
//        TcpServer service = new TcpServer();
//        service.init("-tcpAllowOthers", "-tcpPort", "9099");
//        service.start();

//        Server embeddedServer = new Server();
//        embeddedServer.run(new String[] { "-tcp", "-web" }, System.out);
//        Connection conn = DriverManager.getConnection("jdbc:h2:tcp://localhost/~/test", " sa", "");

        System.out.println("Starting Web Server.......");
//        Server webSrv = Server.createWebServer(new String[]{"-trace"}).start();
        Server webSrv = Server.createTcpServer("-tcpPort", "9123", "-tcpAllowOthers").start();
//        webSrv.init("-tcpAllowOthers", "-tcpPort", "9099");
//        webSrv.start();
        System.out.println("Started Web Server.......");


        Connection conn = DriverManager.getConnection("jdbc:h2:tcp://localhost:9123/~/my", "my", "");

        Thread.sleep(99999999);
        webSrv.stop();

    }

}
