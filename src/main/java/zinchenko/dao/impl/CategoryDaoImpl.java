package zinchenko.dao.impl;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.CategoryDao;
import zinchenko.domain.Category;

import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@Repository
public class CategoryDaoImpl extends AbstractDao implements CategoryDao {

    @Override
    @Transactional(readOnly = true)
    public List<Category> findAll() {
        return getCurrentSession().createCriteria(Category.class).list();
    }

    @Override
    @Transactional(readOnly = true)
    public Category find(Long id) {
        return (Category) getCurrentSession().get(Category.class, id);
    }

    @Override
    @Transactional
    public Long save(Category category) {
        return (Long) getCurrentSession().save(category);
    }

    @Override
    @Transactional
    public void update(Category category) {
        getCurrentSession().update(category);
    }

    @Override
    @Transactional
    public void delete(Category category) {
        getCurrentSession().delete(category);
    }
}
