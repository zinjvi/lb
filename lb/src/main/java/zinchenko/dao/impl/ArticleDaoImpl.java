package zinchenko.dao.impl;

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
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Article save(Article article) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void delete(Article article) {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
