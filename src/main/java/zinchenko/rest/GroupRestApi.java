package zinchenko.rest;

import zinchenko.domain.Group;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * User: zinchenko
 * Date: 22.02.14
 */
@Path("/group")
@Produces("application/json")
@Consumes("application/json")
public interface GroupRestApi {

    @GET
    @Path("/all")
    List<Group> findAll();

    @GET
    @Path("/{id}")
    Group find(@PathParam("id") Long id) throws Exception;

    @POST
    Response save(Group group);

    @PUT
    Group update(Group group);

    @DELETE
    @Path("/{id}")
    Response delete(@PathParam("id") Long id);

}
