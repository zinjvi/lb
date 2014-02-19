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
public interface ArticleRestApi {

    @GET
    @Produces("application/json")
    @Path("/{id}")
    public Article get(@PathParam("id") Long id);

    @GET
    @Produces("application/json")
    @Path("/all")
    public List<Article> getAll();

    @POST
    @Consumes("application/json")
    public Response save(Article article);


    @PUT
    @Consumes("application/json")
    public Response update(Article article);

    @DELETE
    @Path("/{id}")
    public Response delete(@PathParam("id") Long id);

}
