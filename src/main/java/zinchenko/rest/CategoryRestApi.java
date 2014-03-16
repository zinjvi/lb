package zinchenko.rest;

import zinchenko.domain.Category;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/category")
@Produces("application/json")
@Consumes("application/json")
public interface CategoryRestApi {

    @GET
    @Path("/all")
    List<Category> findAll();

    @GET
    @Path("/{id}")
    Category find(@PathParam("id") Long id);

    @POST
    Long save(Category category);

    @PUT
    Long update(Category category);

    @DELETE
    @Path("/{id}")
    Long delete(@PathParam("id") Long id);

}
