package zinchenko;

import com.eclipsesource.restfuse.Destination;
import com.eclipsesource.restfuse.HttpJUnitRunner;
import com.eclipsesource.restfuse.Method;
import com.eclipsesource.restfuse.Response;
import com.eclipsesource.restfuse.annotation.Context;
import com.eclipsesource.restfuse.annotation.HttpTest;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.runner.RunWith;

import java.io.IOException;
import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@RunWith( HttpJUnitRunner.class )
public class ITOrderInfo {

    @Rule
    public Destination destination = new Destination(TestConstants.REST_BASE_URL);//("http://localhost:8080/");

    @Context
    private Response response;

    @HttpTest( method = Method.GET, path = "/rest/Article/all" )
    public void checkRestfuseOnlineStatus() throws InterruptedException, IOException {
        String resp = response.getBody(String.class);
        List articles = new ObjectMapper().readValue(resp, List.class);
        Assert.assertEquals(2, articles.size());
    }
}