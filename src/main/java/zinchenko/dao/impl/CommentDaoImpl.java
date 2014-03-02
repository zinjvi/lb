package zinchenko.dao.impl;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.CommentDao;
import zinchenko.domain.Comment;

import java.util.List;

@Repository
public class CommentDaoImpl extends AbstractDao implements CommentDao{

    @Override
    @Transactional(readOnly = true)
    public List<Comment> findAll() {
        return getCurrentSession().createCriteria(Comment.class).list();
    }

    @Override
    @Transactional(readOnly = true)
    public List<Comment> findByArticleId(Long articleId) {
        Criteria criteria = getCurrentSession().createCriteria(Comment.class);
        criteria.createCriteria("article").add(Restrictions.eq("id", articleId));
        return criteria.list();
    }

    @Override
    @Transactional(readOnly = true)
    public Comment find(Long id) {
        return (Comment) getCurrentSession().get(Comment.class, id);
    }

    @Override
    @Transactional
    public Long save(Comment comment) {
        return (Long) getCurrentSession().save(comment);
    }

    @Override
    @Transactional
    public void update(Comment comment) {
        getCurrentSession().update(comment);
    }

    @Override
    @Transactional
    public void delete(Comment comment) {
        getCurrentSession().delete(comment);
    }

}
