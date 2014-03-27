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
    Response save(Category category);

    @PUT
    Category update(Category category);

    @DELETE
    @Path("/{id}")
    Response delete(@PathParam("id") Long id);

}
