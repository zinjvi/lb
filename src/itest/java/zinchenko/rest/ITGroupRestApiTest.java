package zinchenko.rest;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import zinchenko.TestConstants;
import zinchenko.domain.Category;
import zinchenko.domain.Group;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 * User: zinchenko
 * Date: 23.02.14
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:zinchenko/dbUnitHibernate-applicationContext.xml"})
@DatabaseSetup("classpath:zinchenko/dataset.xml")
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class ITGroupRestApiTest {

    @Test
    public void testFindAll() throws IOException {
        List<Group> groups = createAllGroups();
        String groupsJson = new ObjectMapper()
                .writeValueAsString(groups);

        Response response = RestAssured.get(TestConstants.GROUP_PATH + "/all");
        assertEquals(200, response.getStatusCode());
        assertEquals(groupsJson, response.asString());
    }

    private List<Group> createAllGroups() {
        List<Group> groups = new ArrayList<Group>();
        Group group = new Group();
        group.setId(1L);
        group.setName("test name 1");
        groups.add(group);
        group = new Group();
        group.setId(2L);
        group.setName("test name 2");
        groups.add(group);
        return groups;
    }

    @Test
    public void testFind() throws IOException {
        //given
        Group group = new Group();
        group.setId(1L);
        group.setName("test group name 1");
        group.setCategories(new ArrayList<Category>());

        Category category = new Category();
        category.setId(10L);
        category.setName("test category name 10");
        group.getCategories().add(category);
        category = new Category();
        category.setId(13L);
        category.setName("test category name 13");
        group.getCategories().add(category);

        //when
        String groupJson = new ObjectMapper().writeValueAsString(group);

        //then
        Response response = RestAssured.get(TestConstants.GROUP_PATH + "/1");
        assertEquals(200, response.getStatusCode());
        assertEquals(groupJson, response.asString());
    }

    @Test
    public void testSave() throws IOException {
        Group group = new Group();
        //TODO | remove id
        group.setId(3L);
        group.setName("new name 3");
        String groupJson = new ObjectMapper().writeValueAsString(group);

        Response response = RestAssured.given().contentType(ContentType.JSON)
                .body(groupJson).post(TestConstants.GROUP_PATH);
        assertEquals(200, response.getStatusCode());

        List<Group> groups = createAllGroups();
        groups.add(group);
        String expectedGroupsAfterSave = new ObjectMapper().writeValueAsString(groups);
        assertEquals(expectedGroupsAfterSave, RestAssured
                .get(TestConstants.GROUP_PATH + "/all").asString());
    }

    @Test
    public void testUpdate() throws IOException {
        List<Group> groups = createAllGroups();
        groups.get(1).setName("new name 1");
        String groupJson = new ObjectMapper().writeValueAsString(groups.get(1));
        String expectedGroupsJson = new ObjectMapper().writeValueAsString(groups);

        Response response = RestAssured.given().contentType(ContentType.JSON)
                .body(groupJson).put(TestConstants.GROUP_PATH);
        assertEquals(200, response.getStatusCode());
        assertEquals(expectedGroupsJson, RestAssured
                .get(TestConstants.GROUP_PATH + "/all").asString());
    }

    @Test
    public void testDelete() throws IOException {
        List<Group> groups = createAllGroups();
        groups.remove(0);
        String expectedGroupsJson = new ObjectMapper().writeValueAsString(groups);

        Response response = RestAssured.delete(TestConstants.GROUP_PATH + "/1");
        assertEquals(200, response.getStatusCode());
        assertEquals(expectedGroupsJson, RestAssured
                .get(TestConstants.GROUP_PATH + "/all").asString());
    }

}
