package zinchenko.dao;

import zinchenko.domain.Article;

import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
public interface ArticleDao {

    public List<Article> findAll();

    public Article find(Long id);

    public Long save(Article article);

    public void delete(Article article);

}
