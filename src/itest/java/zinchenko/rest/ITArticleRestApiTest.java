package zinchenko.rest;


import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
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

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

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
    public void testGetById() throws Exception {
        Article article = new Article();
        article.setId(1L);
        article.setTitle("test title 1");
        article.setDescription("test description 1");
        String expectedResult = new ObjectMapper().writeValueAsString(article);

        Response response = RestAssured.get(TestConstants.ARTICLE_PATH + "/1");
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

        Response response = RestAssured.get(TestConstants.ARTICLE_PATH + "/all");
        assertEquals(expectedBody, response.asString());
        assertEquals(200, response.getStatusCode());
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

        Response response = RestAssured.delete(TestConstants.ARTICLE_PATH + "/1");
        assertEquals(200, response.getStatusCode());

        String all = RestAssured.get(TestConstants.ARTICLE_PATH + "/all").asString();
        assertEquals(expectedBody, all);
    }
}