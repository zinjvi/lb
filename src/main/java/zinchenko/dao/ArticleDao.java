package zinchenko.dao;

import zinchenko.domain.Article;

import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
public interface ArticleDao {

    List<Article> findAll();

    Article find(Long id);

    Long save(Article article);

    void update(Article article);

    void delete(Article article);

}
