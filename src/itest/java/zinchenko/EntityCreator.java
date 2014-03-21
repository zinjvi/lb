package zinchenko;

import zinchenko.domain.Article;
import zinchenko.domain.Category;
import zinchenko.domain.Comment;
import zinchenko.domain.Group;

import java.util.Arrays;
import java.util.List;


//TODO | find reflection solution (some library)
public class EntityCreator {

    public static Comment createComment(Long id, String text){
        Comment comment = new Comment();
        comment.setId(id);
        comment.setContent(text);
        return comment;
    }

    public static List<Comment> createComments(Comment... comments){
        return Arrays.asList(comments);
    }

    public static Article createArticle(Long id, String title, String notice,
            String image, String description, List<Comment> comments, Category category){
        Article article = new Article();
        article.setId(id);
        article.setTitle(title);
        article.setNotice(notice);
        article.setImage(image);
        article.setDescription(description);
        article.setComments(comments);
        article.setCategory(category);
        return article;
    }

    public static List<Article> createArticles(Article... articles){
        return Arrays.asList(articles);
    }

    public static Category createCategory(Long id, String name, Group group){
        Category category = new Category();
        category.setId(id);
        category.setName(name);
        category.setGroup(group);
        return category;
    }

    public static Group createGroup(Long id, String name, List<Category> categories){
        Group group = new Group();
        group.setId(id);
        group.setName(name);
        group.setCategories(categories);
        return group;
    }

}
