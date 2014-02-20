package zinchenko.dao.impl;

import org.hibernate.criterion.Criterion;
import org.springframework.stereotype.Repository;
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
    public List<Article> findAll() {
        return getCurrentSession().createCriteria(Article.class).list();
    }

    @Override
    public Article find(Long id) {
        return (Article) getCurrentSession().get(Article.class, id);

    }

    @Override
    public Long save(Article article) {
        return (Long) getCurrentSession().save(article);
    }

    @Override
    public void delete(Article article) {
        getCurrentSession().delete(article);
    }
}
