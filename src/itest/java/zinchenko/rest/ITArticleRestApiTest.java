package zinchenko.rest;


import com.dumbster.smtp.SimpleSmtpServer;
import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import org.apache.activemq.broker.BrokerService;
import org.codehaus.jackson.map.ObjectMapper;
import org.hibernate.SessionFactory;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import zinchenko.domain.Article;
import zinchenko.domain.Category;
import zinchenko.domain.Comment;

import java.io.IOException;
import java.util.List;

import static com.jayway.restassured.RestAssured.delete;
import static com.jayway.restassured.RestAssured.get;
import static com.jayway.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;
import static zinchenko.BeanBuilder.create;
import static zinchenko.EntityCreator.createArticle;
import static zinchenko.EntityCreator.createArticles;
import static zinchenko.EntityCreator.createCategory;
import static zinchenko.EntityCreator.createComment;
import static zinchenko.EntityCreator.createComments;
import static zinchenko.EntityCreator.createGroup;
import static zinchenko.TestConstants.ARTICLE_PATH;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:zinchenko/dbUnitHibernate-applicationContext.xml"})
@DatabaseSetup("classpath:zinchenko/dataset.xml")
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class ITArticleRestApiTest {

    @Autowired
    SessionFactory sessionFactory;

    BrokerService broker;

    String brokerUrl = "tcp://localhost:1212";

    String queueName = "articleQueue";

    private SimpleSmtpServer smtpServer;

    @Before
    public void before() throws Exception {
        broker = new BrokerService();
        broker.addConnector(brokerUrl);
        broker.start();
        smtpServer = SimpleSmtpServer.start(24);
    }

    @After
    public void after() throws Exception {
        broker.stop();
        smtpServer.stop();
    }

    @Test
    public void testDelete() throws Exception {
        //given
        List<Comment> comments = createComments(
                createComment(400L, "Content test 400"),
                createComment(401L, "Content test 401")
        );
        Article article = createArticle(1L, "test title 1", "notice test 1",
                "/xx/zz/n.jpg", "test description 1", comments, null);
        String articleJson = new ObjectMapper().writeValueAsString(article);

        //check right start state
        assertEquals(articleJson, get(ARTICLE_PATH+"/1").asString());

        //when
        Response response = delete(ARTICLE_PATH + "/1");
        assertEquals(200, response.getStatusCode());

        //then
        assertEquals(400, get(ARTICLE_PATH + "/1").statusCode());
    }

    //TODO | add debug logs to server ot rest controller

    @Test
    public void testGetById() throws Exception {
        //given
        List<Comment> comments = createComments(
                createComment(400L, "Content test 400"),
                createComment(401L, "Content test 401")
        );
        Article article = createArticle(1L, "test title 1", "notice test 1",
                "/xx/zz/n.jpg", "test description 1", comments, null);
        String expectedResult = new ObjectMapper().writeValueAsString(article);

        // when
        Response response = get(ARTICLE_PATH + "/1");

        //then
        assertEquals(200, response.getStatusCode());
        assertEquals(expectedResult, response.asString());
    }

    @Test
    public void testGetByCategoryId() throws Exception {
        //given
        Long categoryId = 11L;
        Category expectedCategory = createCategory(
                11L, "test category name 11",
                createGroup(2L, "test group name 2", null)
        );
        List expectedArticles = createArticles(
                createArticle(2L, "test title 2", "notice test 2",
                        "/xx/zz/n.jpg", null, null, expectedCategory),
                createArticle(3L, "test title 3", "notice test 3",
                        "/xx/zz/n.jpg", null, null, expectedCategory)
        );
        String expectedArticlesJson = new ObjectMapper()
                .writeValueAsString(expectedArticles);

        //when
        Response response = get(ARTICLE_PATH + "/byCategoryId/" + categoryId);

        //then
        assertEquals(200, response.statusCode());
        assertEquals(2, expectedArticlesJson);
    }

    @Test
    public void testGetAll() throws Exception {
        //given

        //when
        Response response = get(ARTICLE_PATH + "/all");

        //then
        assertEquals(200, response.getStatusCode());
        List articles = new ObjectMapper().readValue(response.asString(), List.class);
        assertEquals(3, articles.size());
    }

    @Test
    public void testSave() throws Exception {
//        Dada dada = new Dada();
//        //given
//        List list = new ArrayList<Article>();
//        list.size();
//        Article aaa = (Article) list.get(0);

        Article a = (Article) create(Article.class)
                .put("title", "new title").build();
        Article article = createArticle(null, "new title", "new notice",
                "new image", "new description", null, null);
        String articleJson= new ObjectMapper().writeValueAsString(article);

        //when
        Response saveResponse = given().contentType(ContentType.JSON)
                .body(articleJson).when().post(ARTICLE_PATH);

        //then
        assertEquals(200, saveResponse.getStatusCode());
        assertEquals(articleJson, get(ARTICLE_PATH + "/3").asString());
        Thread.sleep(2000L);
        assertEquals(smtpServer.getReceivedEmailSize(), 7);
    }

    @Test
    public void testUpdate() throws IOException {
        //given
        Article article = createArticle(2L, "new title 2", "new notice 2",
                "newArticleImage2.jpg", "new description 2", null, null);
        String articleJson= new ObjectMapper().writeValueAsString(article);

        //when
        Response updateResponse = given().contentType(ContentType.JSON)
                .body(articleJson).when().put(ARTICLE_PATH);

        //then
        assertEquals(200, updateResponse.getStatusCode());
        assertEquals(articleJson, get(ARTICLE_PATH + "/2").asString());
    }

}