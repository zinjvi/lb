package zinchenko.service;

import zinchenko.domain.Article;
import zinchenko.domain.Category;

import java.util.List;

/**
 * User: zinchenko
 * Date: 22.02.14
 */
public interface CategoryService {

    List<Category> findAll();

    Category find(Long id);

    Long save(Category category);

    void update(Category category);

    void delete(Long id);

}
