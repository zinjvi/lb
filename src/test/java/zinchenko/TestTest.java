package zinchenko;

import com.eclipsesource.restfuse.Destination;
import com.eclipsesource.restfuse.HttpJUnitRunner;
import com.eclipsesource.restfuse.Method;
import com.eclipsesource.restfuse.Response;
import com.eclipsesource.restfuse.annotation.Context;
import com.eclipsesource.restfuse.annotation.HttpTest;
import org.junit.Rule;
import org.junit.runner.RunWith;

import static com.eclipsesource.restfuse.Assert.assertOk;

@RunWith(HttpJUnitRunner.class)
public class TestTest{

    @Rule
    public Destination destination = new Destination( "http://restfuse.com" );

    @Context
    private Response response; // will be injected after every request

    @HttpTest( method = Method.GET, path = "/" )
    public void checkRestfuseOnlineStatus() {
        assertOk( response );
    }

}
