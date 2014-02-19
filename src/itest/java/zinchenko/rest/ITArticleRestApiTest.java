package zinchenko.rest;

import com.eclipsesource.restfuse.Destination;
import com.eclipsesource.restfuse.HttpJUnitRunner;
import com.eclipsesource.restfuse.Method;
import com.eclipsesource.restfuse.Response;
import com.eclipsesource.restfuse.annotation.Context;
import com.eclipsesource.restfuse.annotation.HttpTest;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Ignore;
import org.junit.Rule;
import org.junit.runner.RunWith;
import zinchenko.TestConstants;
import zinchenko.domain.Article;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@RunWith( HttpJUnitRunner.class )
@Ignore
public class ITArticleRestApiTest {

    public static final String ARTICLE_PATH = "/rest/Article";

    @Rule
    public Destination destination = new Destination(TestConstants.REST_BASE_URL);


    @Context
    private Response response;

    @HttpTest(method = Method.GET, path = ARTICLE_PATH + "/1")
    public void testGetById() throws Exception {
        Article article = new Article();
        article.setId(1L);
        article.setTitle("test title 1");
        article.setDescription("test description 1");
        String expectedResult = new ObjectMapper().writeValueAsString(article);

        assertEquals(expectedResult, response.getBody(String.class));
        assertEquals(200, response.getStatus());
    }

    @HttpTest( method = Method.GET, path = ARTICLE_PATH + "/all" )
    public void testGetAll() throws Exception {
        List<Article> articles = new ArrayList<Article>();
        Article article = new Article();
        article.setId(1L);
        article.setTitle("test title 1");
        article.setDescription("test description 1");
        articles.add(article);
        article = new Article();
        article.setId(2L);
        article.setTitle("test title 2");
        article.setDescription("test description 2");
        articles.add(article);
        String expectedBody = new ObjectMapper().writeValueAsString(articles);

        String actualBody = response.getBody(String.class);
        assertEquals(expectedBody, actualBody);
        assertEquals(200, response.getStatus());
    }

    @HttpTest(method = Method.DELETE, path = ARTICLE_PATH + "/1")
    public void testDelete() throws Exception {
        List<Article> articles = new ArrayList<Article>();
        Article article = new Article();
        article.setId(1L);
        article.setTitle("test title 1");
        article.setDescription("test description 1");
        articles.add(article);
        String expectedBody = new ObjectMapper().writeValueAsString(articles);

        assertEquals(expectedBody, response.getBody(String.class));
        assertEquals(200, response.getStatus());
    }
}