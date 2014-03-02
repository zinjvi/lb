package zinchenko.service;

import zinchenko.domain.Comment;

import java.util.List;

public interface CommentService {

    List<Comment> findAll();

    List<Comment> findByArticleId(Long articleId);

    Comment find(Long id);

    Long save(Comment comment);

    void update(Comment comment);

    void delete(Long id);

    void sendEmailToCategorySubscribers(Comment comment);

}
