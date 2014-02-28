package zinchenko.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zinchenko.dao.ArticleDao;
import zinchenko.dao.SubscriptionDao;
import zinchenko.domain.Article;
import zinchenko.domain.Subscription;
import zinchenko.service.ArticleService;
import zinchenko.service.EmailService;
import zinchenko.service.MessageService;
import zinchenko.service.UnexpectedServiceException;

import java.util.List;

/**
 * User: zinchenko
 * Date: 20.02.14
 */
@Service(value = "articleService")
public class ArticleServiceImpl implements ArticleService {

    private static final Log LOG = LogFactory.getLog(ArticleServiceImpl.class);

    @Autowired
    private ArticleDao articleDao;

    @Autowired
    private MessageService messageService;

    @Autowired
    private SubscriptionDao subscriptionDao;

    @Autowired
    private EmailService emailService;

    @Override
    public List<Article> findAll() {
        return articleDao.findAll();
    }

    @Override
    public Article find(Long id) {
        return articleDao.find(id);
    }

    @Override
    public Long save(Article article) {
        Long articleId = articleDao.save(article);
        messageService.sendNewArticleToQueue(article);
        return articleId;
    }

    @Override
    public void update(Article article) {
        articleDao.update(article);
    }

    @Override
    public void delete(Long id) {
        try {
            Article article = new Article();
            article.setId(id);
            articleDao.delete(article);
        } catch (Exception e) {
            throw new UnexpectedServiceException("Fail delete article", e);
        }
    }

    @Override
    public void sendEmailToSubscribers(Article article) {
        List<Subscription> subscriptions = subscriptionDao.findByArticleId(article.getId());
        for(Subscription subscription: subscriptions){
            String from = "zinjvi@gmail.com";
            String to = subscription.getPerson().getEmail();
            String s
                    String t = ""
            emailService.send();
        }
        LOG.debug(article);
    }

    public ArticleDao getArticleDao() {
        return articleDao;
    }

    public void setArticleDao(ArticleDao articleDao) {
        this.articleDao = articleDao;
    }

    public MessageService getMessageService() {
        return messageService;
    }

    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }

    public SubscriptionDao getSubscriptionDao() {
        return subscriptionDao;
    }

    public void setSubscriptionDao(SubscriptionDao subscriptionDao) {
        this.subscriptionDao = subscriptionDao;
    }

    public EmailService getEmailService() {
        return emailService;
    }

    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
}
