package zinchenko.service;

import zinchenko.domain.Article;
import zinchenko.domain.Comment;

public interface MessageService {

    void sendNewArticleToQueue(Article article);

    void sendNewCommentToQueue(Comment comment);

}
