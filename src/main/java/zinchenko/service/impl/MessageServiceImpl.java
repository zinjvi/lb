package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import zinchenko.domain.Article;
import zinchenko.domain.Comment;
import zinchenko.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    @Qualifier("articleJmsTemplate")
    private JmsTemplate articleJmsTemplate;

    @Autowired
    @Qualifier("commentJmsTemplate")
    private JmsTemplate commentJmsTemplate;

    @Override
    public void sendNewArticleToQueue(Article article) {
        articleJmsTemplate.convertAndSend(article);
    }

    @Override
    public void sendNewCommentToQueue(Comment comment) {
        commentJmsTemplate.convertAndSend(comment);
    }

    public JmsTemplate getArticleJmsTemplate() {
        return articleJmsTemplate;
    }

    public void setArticleJmsTemplate(JmsTemplate articleJmsTemplate) {
        this.articleJmsTemplate = articleJmsTemplate;
    }

    public JmsTemplate getCommentJmsTemplate() {
        return commentJmsTemplate;
    }

    public void setCommentJmsTemplate(JmsTemplate commentJmsTemplate) {
        this.commentJmsTemplate = commentJmsTemplate;
    }
}
