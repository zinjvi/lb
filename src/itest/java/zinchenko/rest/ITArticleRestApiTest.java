package zinchenko.rest;


import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.ObjectMapper;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import zinchenko.TestConstants;
import zinchenko.domain.Article;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static com.jayway.restassured.RestAssured.*;
import static org.junit.Assert.assertEquals;
import static zinchenko.TestConstants.ARTICLE_PATH;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:zinchenko/hibernate-applicationContext.xml"})
@DatabaseSetup("classpath:zinchenko/dataset.xml")
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class ITArticleRestApiTest {

    @Autowired
    SessionFactory sessionFactory;

    @Test
    public void test() {
        try {
            Session session = sessionFactory.openSession();
            session.createCriteria(Article.class).list();
            System.out.println("");
        } catch (Exception e) {
            System.out.println(e);
        }

        System.out.println("t");
    }

    @Test
    public void testDelete() throws Exception {
        List<Article> articles = new ArrayList<Article>();
        Article article = new Article();
        article.setId(2L);
        article.setTitle("test title 2");
        article.setDescription("test description 2");
        articles.add(article);
        String expectedBody = new ObjectMapper().writeValueAsString(articles);

        Response response = delete(ARTICLE_PATH + "/1");
        assertEquals(200, response.getStatusCode());

        String all = get(ARTICLE_PATH + "/all").asString();
        //TODO | add debug logs to server ot rest controller
        System.out.println("testDelete()");
        System.out.println(all);
        assertEquals(expectedBody, all);
    }

    @Test
    public void testGetById() throws Exception {
        Article article = new Article();
        article.setId(1L);
        article.setTitle("test title 1");
        article.setDescription("test description 1");
        String expectedResult = new ObjectMapper().writeValueAsString(article);

        Response response = get(ARTICLE_PATH + "/1");
        //TODO | add debug logs to server ot rest controller
        System.out.println("testGetById()");
        System.out.println(response.asString());
        assertEquals(expectedResult, response.asString());
        assertEquals(200, response.getStatusCode());
    }

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

        Response response = get(ARTICLE_PATH + "/all");
        //TODO | add debug logs to server ot rest controller
        System.out.println("testGetAll()");
        System.out.println(response.asString());
        assertEquals(expectedBody, response.asString());
        assertEquals(200, response.getStatusCode());
    }

    @Test
    public void testSave() throws IOException {
        Article article = new Article();
        //TODO | remove id
        article.setId(3L);
        article.setTitle("new title 3");
        article.setDescription("new description 3");
        String articleJson= new ObjectMapper().writeValueAsString(article);

        Response saveResponse = given().contentType(ContentType.JSON)
                .body(articleJson).when().post(ARTICLE_PATH);
        assertEquals(200, saveResponse.getStatusCode());

        assertEquals(articleJson, get(ARTICLE_PATH + "/3").asString());
    }

    @Test
    public void testUpdate() throws IOException {
        Article article = new Article();
        article.setId(2L);
        article.setTitle("new title 2");
        article.setDescription("new description 2");
        String articleJson= new ObjectMapper().writeValueAsString(article);

        Response updateResponse = given().contentType(ContentType.JSON)
                .body(articleJson).when().put(ARTICLE_PATH);
        assertEquals(200, updateResponse.getStatusCode());

        assertEquals(articleJson, get(ARTICLE_PATH + "/2").asString());
    }

}