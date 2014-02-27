package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import zinchenko.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    private JmsTemplate articleTemplate;

    @Override
    public void sendNewArticleIdToQueue(Long articleId) {
        articleTemplate.convertAndSend(articleId);
    }

    @Override
    public void sendNewCommentIdToQueue(Long commentId) {

    }

    public JmsTemplate getArticleTemplate() {
        return articleTemplate;
    }

    public void setArticleTemplate(JmsTemplate articleTemplate) {
        this.articleTemplate = articleTemplate;
    }
}
