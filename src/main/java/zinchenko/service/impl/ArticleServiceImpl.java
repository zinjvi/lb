package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.ArticleDao;
import zinchenko.domain.Article;
import zinchenko.service.ArticleService;
import zinchenko.service.UnexpectedServiceException;

import java.util.List;

/**
 * User: zinchenko
 * Date: 20.02.14
 */
@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    ArticleDao articleDao;

    @Override
    public List<Article> findAll() {
        return articleDao.findAll();
    }

    @Override
    public Article find(Long id) {
        return articleDao.find(id);
    }

    @Override
    public Long save(Article article) {
        return articleDao.save(article);
    }

    @Override
    public void update(Article article) {
        articleDao.update(article);
    }

    @Override
    public void delete(Long id) {
        try {
            Article article = new Article();
            article.setId(id);
            articleDao.delete(article);
        } catch (Exception e) {
            throw new UnexpectedServiceException("Fail delete article", e);
        }
    }

    public ArticleDao getArticleDao() {
        return articleDao;
    }

    public void setArticleDao(ArticleDao articleDao) {
        this.articleDao = articleDao;
    }
}
