package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zinchenko.dao.ArticleDao;
import zinchenko.dao.CategoryDao;
import zinchenko.domain.Article;
import zinchenko.domain.Category;
import zinchenko.domain.Group;
import zinchenko.service.CategoryService;
import zinchenko.service.GroupService;

import java.util.List;

/**
 * User: zinchenko
 * Date: 22.02.14
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryDao categoryDao;

    @Autowired
    GroupService groupService;

    @Autowired
    ArticleDao articleDao;

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
        //TODO ||
        Group group = groupService.find(category.getGroup().getId());
        category.setGroup(group);
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

    public GroupService getGroupService() {
        return groupService;
    }

    public void setGroupService(GroupService groupService) {
        this.groupService = groupService;
    }

    public ArticleDao getArticleDao() {
        return articleDao;
    }

    public void setArticleDao(ArticleDao articleDao) {
        this.articleDao = articleDao;
    }

}
