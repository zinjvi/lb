package zinchenko;

import com.eclipsesource.restfuse.Destination;
import com.eclipsesource.restfuse.HttpJUnitRunner;
import com.eclipsesource.restfuse.Method;
import com.eclipsesource.restfuse.Response;
import com.eclipsesource.restfuse.annotation.Context;
import com.eclipsesource.restfuse.annotation.HttpTest;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import static com.eclipsesource.restfuse.Assert.assertOk;

public class TestTest{

    @Test
    public void test() throws SQLException {
//        Connection conn = DriverManager.getConnection("jdbc:h2:tcp://localhost:6061/~/test",
//


//        Statement statement = conn.createStatement();
//        statement.execute("DROP ALL OBJECTS DELETE FILES");
//        conn.commit();
//        conn.close();


//        Assert.assertNotNull(conn);
    }

}
