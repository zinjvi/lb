package zinchenko.rest;

import com.jayway.restassured.RestAssured;
import org.junit.Test;
import zinchenko.TestConstants;

import static com.jayway.restassured.RestAssured.get;

public class ITTestTest {

    @Test
    public void test(){
        try {
//            RestAssured.baseURI = "http://google.com";
//            RestAssured.port = 443;
//            RestAssured.urlEncodingEnabled = false;
//            final String query = "project%20=%20BAM%20AND%20issuetype%20=%20Bug";
            String r = get("http://localhost:8080/rest/Article/all").asString();
            System.out.println(r);
        } finally {
            RestAssured.reset();
        }
    }

}
