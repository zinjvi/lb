package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import zinchenko.dao.CommentDao;
import zinchenko.domain.Comment;
import zinchenko.service.CommentService;

import java.util.List;

public class CommentServiceImpl implements CommentService {

    @Autowired
    CommentDao commentDao;

    @Override
    public List<Comment> findAll() {
        return commentDao.findAll();
    }

    @Override
    public Comment find(Long id) {
        return commentDao.find(id);
    }

    @Override
    public Long save(Comment comment) {
        return commentDao.save(comment);
    }

    @Override
    public void update(Comment comment) {
        commentDao.update(comment);
    }

    @Override
    public void delete(Long id) {
        Comment comment = new Comment();
        comment.setId(id);
        commentDao.delete(comment);
    }

}
