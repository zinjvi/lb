package zinchenko;

import zinchenko.domain.Article;
import zinchenko.domain.Comment;

import java.util.Arrays;
import java.util.List;

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

    public static Article createArticle(Long id, String title, String image,
            String description, List<Comment> comments, String notice){
        Article article = new Article();
        article.setId(id);
        article.setTitle(title);
        article.setImage(image);
        article.setDescription(description);
        article.setComments(comments);
        article.setNotice(notice);
        return article;
    }

}
