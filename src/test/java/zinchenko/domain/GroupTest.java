package zinchenko.domain;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

public class GroupTest {

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {

    }



    @Test//(timeout = 1000)
    public void testEquals() throws Exception {
        Group firstGroup = completeGroupCategory();
        Group secondGroup = completeGroupCategory();

        Assert.assertTrue(firstGroup.equals(secondGroup));
    }

    private Group completeGroupCategory() {
        Group group = new Group();
        group.setId(10L);
        group.setName("group name");
        group.setCategories(new ArrayList<Category>());
        group.getCategories().add(new Category());
        Category category = group.getCategories().get(0);
        category.setId(100L);
        category.setName("category name");
        category.setGroup(group);
        return group;
    }

    @Test
    public void testHashCode() throws Exception {

    }
}
