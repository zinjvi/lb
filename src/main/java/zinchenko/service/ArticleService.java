package zinchenko.service;

import zinchenko.domain.Article;

import java.util.List;

/**
 * User: zinchenko
 * Date: 20.02.14
 */
public interface ArticleService {

    public List<Article> findAll();

    public List<Article> findByCategoryId(Long categoryId);

    public Article find(Long id);

    public Long save(Article article);

    public void update(Article article);

    public void delete(Long id);

    void sendEmailToCategorySubscribers(Article article);

}
