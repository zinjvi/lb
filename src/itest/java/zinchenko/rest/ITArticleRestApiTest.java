package zinchenko.rest;


import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Test;
import zinchenko.TestConstants;
import zinchenko.domain.Article;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
public class ITArticleRestApiTest {

    public static final String ARTICLE_PATH = "/rest/Article";

/*    public void testGetById() throws Exception {
        Article article = new Article();
        article.setId(1L);
        article.setTitle("test title 1");
        article.setDescription("test description 1");
        String expectedResult = new ObjectMapper().writeValueAsString(article);

        assertEquals(expectedResult, response.getBody(String.class));
        assertEquals(200, response.getStatus());
    }*/

    @Test
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

        Response response = RestAssured.get(TestConstants.REST_BASE_URL + ARTICLE_PATH + "/all");
        assertEquals(expectedBody, response.asString());
        assertEquals(200, response.getStatusCode());
    }

/*    public void testDelete() throws Exception {
        List<Article> articles = new ArrayList<Article>();
        Article article = new Article();
        article.setId(1L);
        article.setTitle("test title 1");
        article.setDescription("test description 1");
        articles.add(article);
        String expectedBody = new ObjectMapper().writeValueAsString(articles);

        assertEquals(expectedBody, response.getBody(String.class));
        assertEquals(200, response.getStatus());
    }*/
}