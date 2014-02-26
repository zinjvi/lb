package zinchenko.service;

public interface MessageService {

    void sendNewArticleIdToQueue(Long articleId);

    void sendNewCommentIdToQueue(Long commentId);

}
