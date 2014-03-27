package zinchenko.rest;

import zinchenko.domain.Article;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/Article")
@Produces("application/json")
@Consumes("application/json")
public interface ArticleRestApi {

    @GET
    @Path("/{id}")
    public Article get(@PathParam("id") Long id);

    @GET
    @Path("/all")
    public List<Article> getAll();

    // TODO | need optimize. need add possibility to declare needed fields
    @GET
    @Path("/byCategoryId/{categoryId}")
    List<Article> getByCategoryId(@PathParam("categoryId") Long categoryId);

    @POST
    public Response save(Article article);


    @PUT
    public Article update(Article article);

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id);

}
