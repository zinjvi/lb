package zinchenko;

import zinchenko.domain.Article;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import java.util.List;

@Path("/Article")
@Produces("application/json")
public interface ArticleRest {

    @GET
    @Produces("application/json")
    @Path("/{id}")
    public Article get(@PathParam("id") int id);

    @GET
    @Produces("application/json")
    @Path("/all")
    public List<Article> getAll();

}
