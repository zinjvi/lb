package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zinchenko.dao.CategoryDao;
import zinchenko.domain.Category;
import zinchenko.service.CategoryService;

import java.util.List;

/**
 * User: zinchenko
 * Date: 22.02.14
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryDao categoryDao;

    @Override
    public List<Category> findAll() {
        return categoryDao.findAll();
    }

    @Override
    public Category find(Long id) {
        return categoryDao.find(id);
    }

    @Override
    public Long save(Category category) {
        return categoryDao.save(category);
    }

    @Override
    public void update(Category category) {
        categoryDao.update(category);
    }

    @Override
    public void delete(Long id) {
        Category category = new Category();
        category.setId(id);
        categoryDao.delete(category);
    }

    public CategoryDao getCategoryDao() {
        return categoryDao;
    }

    public void setCategoryDao(CategoryDao categoryDao) {
        this.categoryDao = categoryDao;
    }

}
