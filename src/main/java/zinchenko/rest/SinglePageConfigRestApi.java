package zinchenko.rest;

import zinchenko.domain.SinglePageConfig;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 * User: zinchenko
 * Date: 16.03.14
 */
@Path("/singlePageConfig")
@Consumes("application/json")
@Produces("application/json")
public interface SinglePageConfigRestApi {

    @GET
    SinglePageConfig get();

}
