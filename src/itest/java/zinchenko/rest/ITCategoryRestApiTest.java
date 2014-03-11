package zinchenko.rest;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import zinchenko.TestConstants;
import zinchenko.domain.Category;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * User: zinchenko
 * Date: 23.02.14
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:zinchenko/hibernate-applicationContext.xml"})
@DatabaseSetup("classpath:zinchenko/dataset.xml")
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class ITCategoryRestApiTest {

    @Test
    public void testFindAll() throws IOException {
        List<Category> categories = createAllCategories();
        String categoriesJson = new ObjectMapper()
                .writeValueAsString(categories);

        Response response = RestAssured.get(TestConstants.CATEGORY_PATH + "/all");
        assertEquals(200, response.getStatusCode());
        assertEquals(categoriesJson, response.asString());
    }

    private List<Category> createAllCategories() {
        List<Category> categories = new ArrayList<Category>();
        Category category = new Category();
        category.setId(1L);
        category.setName("test name 1");
        categories.add(category);
        category = new Category();
        category.setId(2L);
        category.setName("test name 2");
        categories.add(category);
        return categories;
    }

    @Test
    public void testFind() throws IOException {
        Category category = new Category();
        category.setId(1L);
        category.setName("test name 1");
        String categoryJson = new ObjectMapper()
                .writeValueAsString(category);

        Response response = RestAssured.get(TestConstants.CATEGORY_PATH + "/1");
        assertEquals(200, response.getStatusCode());
        assertEquals(categoryJson, response.asString());
    }

    @Test
    public void testSave() throws IOException {
        Category category = new Category();
        //TODO | remove id
//        category.setId(3L);
        category.setName("test name 3");
        String categoryJson = new ObjectMapper()
                .writeValueAsString(category);

        Response response = RestAssured.given().contentType(ContentType.JSON)
                .body(categoryJson).post(TestConstants.CATEGORY_PATH);
        assertEquals(200, response.getStatusCode());

        List<Category> allCategoriesAfterSave = createAllCategories();
        allCategoriesAfterSave.add(category);
        String expectedCategoriesAfterSaveJson = new ObjectMapper()
                .writeValueAsString(allCategoriesAfterSave);

        String categoriesAfterSave = RestAssured.get(TestConstants.CATEGORY_PATH + "/all").asString();
        assertEquals(expectedCategoriesAfterSaveJson, categoriesAfterSave);
    }

    @Test
    public void testUpdate() throws IOException {
        Category category = new Category();
        category.setId(1L);
        category.setName("new name 1");
        String categoryJson = new ObjectMapper()
                .writeValueAsString(category);

        Response response = RestAssured.given().contentType(ContentType.JSON)
                .body(categoryJson).put(TestConstants.CATEGORY_PATH);
        assertEquals(200, response.getStatusCode());

        assertEquals(categoryJson, RestAssured
                .get(TestConstants.CATEGORY_PATH + "/1").asString());
    }

    @Test
    public void testDelete() throws IOException {
        List<Category> categories = createAllCategories();
        categories.remove(1);
        String categoriesJson = new ObjectMapper()
                .writeValueAsString(categories);

        Response response = RestAssured.delete(TestConstants.CATEGORY_PATH + "/2");
        assertEquals(200, response.getStatusCode());

        assertEquals(categoriesJson, RestAssured
                .get(TestConstants.CATEGORY_PATH + "/all").asString());
    }

}
