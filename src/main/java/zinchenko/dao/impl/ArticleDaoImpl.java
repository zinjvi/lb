package zinchenko.dao.impl;

import org.hibernate.Criteria;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.ArticleDao;
import zinchenko.domain.Article;

import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@Repository
public class ArticleDaoImpl extends AbstractDao implements ArticleDao {


    @Override
    @Transactional(readOnly = true)
    public List<Article> findAll() {
        return getCurrentSession().createCriteria(Article.class).list();
    }

    @Override
    @Transactional(readOnly = true)
    public List<Article> findByCategoryId(Long categoryId) {
        return getCurrentSession().createQuery("select new zinchenko.domain.Article(" +
                "a.id, a.title, a.notice, a.image) from Article a " +
                "where a.category.id = :categoryId ").setParameter("categoryId", categoryId)
                .list();
//        Criteria criteria = getCurrentSession().createCriteria(Article.class);
//        criteria.setProjection(Projections.projectionList()
//                .add(Projections.property("id"))
//                .add(Projections.property("title"))
//                .add(Projections.property("notice"))
//                .add(Projections.property("image")));
//        criteria.createCriteria("category").add(Restrictions.eq("id", categoryId));
//        return criteria.list();
    }

    @Override
    @Transactional(readOnly = true)
    public Article find(Long id) {
        return (Article) getCurrentSession().createQuery(
                "select distinct a from Article a left join fetch a.comments where a.id = :id")
                .setParameter("id", id).uniqueResult();
    }

    @Override
    @Transactional
    public Long save(Article article) {
        return (Long) getCurrentSession().save(article);
    }

    @Override
    @Transactional
    public void update(Article article) {
        getCurrentSession().update(article);
    }

    @Override
    public void delete(Article article) {
        getCurrentSession().delete(article);
    }
}
