package zinchenko.rest.impl;

import org.springframework.beans.factory.annotation.Autowired;
import zinchenko.domain.Category;
import zinchenko.rest.CategoryRestApi;
import zinchenko.service.CategoryService;

import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;
import java.util.List;


public class CategoryRestApiImpl implements CategoryRestApi {

    @Autowired
    CategoryService categoryService;

    @Override
    public List<Category> findAll() {
        return categoryService.findAll();
    }

    @Override
    public Category find(Long id) {
        return categoryService.find(id);
    }

    @Override
    public Long save(Category category) {
        Long id = categoryService.save(category);
        // TODO
        return id;
    }

    @Override
    public Long update(Category category) {
        categoryService.update(category);
        //TODO
        return category.getId();
    }

    @Override
    public Response delete(Long id) {
        categoryService.delete(id);
        return Response.status(Response.Status.OK).build();
    }

    public CategoryService getCategoryService() {
        return categoryService;
    }

    public void setCategoryService(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
}
