package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.ArticleDao;
import zinchenko.domain.Article;
import zinchenko.service.ArticleService;
import zinchenko.service.UnexpectedServiceException;

/**
 * User: zinchenko
 * Date: 20.02.14
 */
@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    ArticleDao articleDao;

    @Override
    @Transactional
    public void delete(Long id) {
        try {
            Article article = new Article();
            article.setId(id);
            articleDao.delete(article);
        } catch (Exception e) {
            throw new UnexpectedServiceException("Failed delete article", e);
        }
    }

    public ArticleDao getArticleDao() {
        return articleDao;
    }

    public void setArticleDao(ArticleDao articleDao) {
        this.articleDao = articleDao;
    }
}
