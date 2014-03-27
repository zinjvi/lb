package zinchenko.rest.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.ArticleDao;
import zinchenko.domain.Article;
import zinchenko.rest.ArticleRestApi;
import zinchenko.rest.UnexpectedRestException;
import zinchenko.service.ArticleService;
import zinchenko.service.UnexpectedServiceException;

import javax.ws.rs.core.Response;
import java.util.List;

//TODO | provide presentation server errors correctly
public class ArticleRestApiImpl implements ArticleRestApi {

    private static final Log LOG = LogFactory.getLog(ArticleRestApiImpl.class);

    @Autowired
    ArticleDao articleDao;

    @Autowired
    ArticleService articleService;

    public ArticleRestApiImpl() {
    }

    @Override
    public Article get(Long id) {
        return articleDao.find(id);
    }

    @Override
    @Transactional
    public List<Article> getAll() {
        try {
            List<Article> articles = articleDao.findAll();
            LOG.debug(articles);
            return articles;
        } catch (Exception e) {
            LOG.error("Fail loading all articles", e);
            throw new UnexpectedServiceException(e);
        }
    }

    @Override
    public List<Article> getByCategoryId(Long categoryId) {
        return articleService.findByCategoryId(categoryId);
    }

    @Override
    public Response save(Article article) {
        try {
            Long id = articleService.save(article);
            return Response.status(Response.Status.CREATED).entity(id).build();
        } catch (Exception e) {
            LOG.error("Fail sale article", e);
            throw new UnexpectedRestException("Fail sale article", e);
        }
    }

    @Override
    public Article update(Article article) {
        articleDao.update(article);
        return article;
    }

    @Override
    public Response delete(Long id) {
        articleService.delete(id);
        return Response.status(Response.Status.NO_CONTENT).build();
    }

    public ArticleDao getArticleDao() {
        return articleDao;
    }

    public void setArticleDao(ArticleDao articleDao) {
        this.articleDao = articleDao;
    }
}
