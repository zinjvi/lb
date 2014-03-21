package zinchenko.rest;

import org.apache.camel.Consume;
import zinchenko.domain.Comment;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * User: zinchenko
 * Date: 02.03.14
 */
@Path("/comment")
@Consumes("application/json")
@Produces("application/json")
public interface CommentRestApi {

    @GET
    @Path("/byArticleId/{articleId}")
    List<Comment> getByArticleId(@PathParam("articleId")Long articleId);

    @POST
    Response save(Comment comment);

    @DELETE
    @Path("/{id}")
    Long delete(@PathParam("id") Long id);

}
