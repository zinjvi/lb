package zinchenko.dao;

import zinchenko.domain.Comment;

import java.util.List;

public interface CommentDao {

    List<Comment> findAll();

    List<Comment> findByArticleId(Long articleId);

    Comment find(Long id);

    Long save(Comment comment);

    void update(Comment comment);

    void delete(Comment comment);

}
