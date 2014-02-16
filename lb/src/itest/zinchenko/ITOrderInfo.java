package zinchenko;

import com.eclipsesource.restfuse.Destination;
import com.eclipsesource.restfuse.HttpJUnitRunner;
import com.eclipsesource.restfuse.Method;
import com.eclipsesource.restfuse.Response;
import com.eclipsesource.restfuse.annotation.Context;
import com.eclipsesource.restfuse.annotation.HttpTest;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import zinchenko.domain.Article;

import java.io.IOException;
import java.util.List;

//import static com.jayway.restassured.RestAssured.get;
//import static org.hamcrest.Matchers.equalTo;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
//@RunWith(HttpJUnitRunner.class)
public class ITOrderInfo {

//    @Rule
//    public Destination destination = new Destination(ITConstants.REST_BASE_URL);

//    @Context
//    private Response response;

//    @HttpTest(method = Method.GET, path = "/rest/Article/all")
    public void testAll() throws IOException {
        System.out.println("all started");
//        String resp = response.getBody(String.class);
//        List<Article> user = new ObjectMapper().readValue(resp, List.class);
//        Assert.assertEquals(2, user.size());
        Assert.assertEquals(2, 3);
    }

//    @HttpTest(method = Method.GET, path = "/rest/Article/100")
    public void testGetById() throws IOException {

    }

}
