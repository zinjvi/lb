package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import zinchenko.domain.Article;
import zinchenko.domain.Comment;
import zinchenko.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    private JmsTemplate articleTemplate;

    @Override
    public void sendNewArticleToQueue(Article article) {
        articleTemplate.convertAndSend(article);
    }

    @Override
    public void sendNewCommentToQueue(Comment comment) {

    }

    public JmsTemplate getArticleTemplate() {
        return articleTemplate;
    }

    public void setArticleTemplate(JmsTemplate articleTemplate) {
        this.articleTemplate = articleTemplate;
    }
}
