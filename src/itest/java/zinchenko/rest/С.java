package zinchenko.rest;

import com.jayway.restassured.RestAssured;
import org.junit.Assert;
import org.junit.Test;
import zinchenko.TestConstants;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import static com.jayway.restassured.RestAssured.get;

public class С {

//    @Test
    public void test() {
        try {
            String r = get("http://localhost:8080/rest/Article/all").asString();
            System.out.println(r);
        } finally {
            RestAssured.reset();
        }
    }

//    @Test
    public void test2() throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:h2:tcp://localhost:6061/~/test",
                "test", "test");

//        Statement statement = conn.createStatement();
//        statement.execute("DROP ALL OBJECTS DELETE FILES");
//        conn.commit();
//        conn.close();

        Assert.assertNotNull(conn);
    }

}
