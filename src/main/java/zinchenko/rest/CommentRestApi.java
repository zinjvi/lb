package zinchenko.rest;

import zinchenko.domain.Comment;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
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
    Comment save(Comment comment);

    @DELETE
    @Path("/{id}")
    Response delete(@PathParam("id") Long id);

}
