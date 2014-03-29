package zinchenko.rest.impl;

import org.springframework.beans.factory.annotation.Autowired;
import zinchenko.domain.Comment;
import zinchenko.rest.CommentRestApi;
import zinchenko.service.CommentService;

import javax.ws.rs.core.Response;
import java.util.List;

/**
 * User: zinchenko
 * Date: 02.03.14
 */
public class CommentRestApiImpl implements CommentRestApi {

    @Autowired
    private CommentService commentService;

    @Override
    public List<Comment> getByArticleId(Long articleId) {
        return commentService.findByArticleId(articleId);
    }

    @Override
    public Comment save(Comment comment) {
        commentService.save(comment);
        return comment;
    }

    @Override
    public Response delete(Long id) {
        //TODO |
        if(true){
        throw new RuntimeException("err");
        }
        //commentService.delete(id);
        return Response.status(Response.Status.NO_CONTENT).build();
    }

}
