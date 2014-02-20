package zinchenko.rest.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.ArticleDao;
import zinchenko.domain.Article;
import zinchenko.rest.ArticleRestApi;
import zinchenko.service.ArticleService;

import javax.ws.rs.core.Response;
import java.util.List;


public class ArticleRestApiImpl implements ArticleRestApi {

    @Autowired
    ArticleDao articleDao;

    @Autowired
    ArticleService articleService;

    public ArticleRestApiImpl() {
    }

    @Override
    @Transactional
    public Article get(Long id) {
        return articleDao.find(id);
    }

    @Override
    @Transactional
    public List<Article> getAll() {
        List<Article> articles = articleDao.findAll();
        return articles;
    }

    @Override
    public Response save(Article article) {
        articleDao.save(article);
        return Response.status(Response.Status.OK).build();
    }

    @Override
    public Response update(Article article) {
        articleDao.save(article);
        return Response.status(Response.Status.OK).build();
    }

    @Override
    public Response delete(Long id) {
        articleService.delete(id);
        return Response.status(Response.Status.OK).build();
    }

    public ArticleDao getArticleDao() {
        return articleDao;
    }

    public void setArticleDao(ArticleDao articleDao) {
        this.articleDao = articleDao;
    }
}
