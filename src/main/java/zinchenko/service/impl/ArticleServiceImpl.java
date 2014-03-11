package zinchenko.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.cxf.common.jaxb.JAXBUtils;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.velocity.VelocityEngineUtils;
import zinchenko.Constants;
import zinchenko.dao.ArticleDao;
import zinchenko.dao.SubscriptionDao;
import zinchenko.domain.Article;
import zinchenko.domain.Subscription;
import zinchenko.service.*;

import java.text.MessageFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * User: zinchenko
 * Date: 20.02.14
 */
@Service(value = "articleService")
public class ArticleServiceImpl implements ArticleService {

    private static final Log LOG = LogFactory.getLog(ArticleServiceImpl.class);

    public static final String NEW_ARTICLE_TEMPLATE_LOCATION = "/zinchenko/service/templates/newArticleEmailTemplate.vm";

    @Value("${email.from}")
    private String sendEmailFrom;

    @Value("${email.subject.new.article.notification}")
    private String subjectNewArticleNotification;

    @Autowired
    private ArticleDao articleDao;

    @Autowired
    private MessageService messageService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private SubscriptionDao subscriptionDao;

    @Autowired
    private EmailService emailService;

    @Autowired
    private VelocityEngine velocityEngine;

    @Override
    public List<Article> findAll() {
        return articleDao.findAll();
    }

    @Override
    public List<Article> findByCategoryId(Long categoryId) {
        return articleDao.findByCategoryId(categoryId);
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
    @Transactional
    public void delete(Long id) {
        try {
            Article article = new Article();
            article.setId(id);
            //TODO
//            articleDao.delete(article);
            Article a = articleDao.find(id);
            articleDao.delete(a);
        } catch (Exception e) {
            throw new UnexpectedServiceException("Fail delete article", e);
        }
    }

    @Override
    public void sendEmailToCategorySubscribers(Article article) {
        List<Subscription> subscriptions = subscriptionDao
                .findByCategoryId(article.getCategory().getId());
        LOG.debug(MessageFormat.format("Category {0} with id {1} has {2} subscribers",
                article.getCategory().getName(), article.getCategory().getId(),
                subscriptions.size()));
        for(Subscription subscription: subscriptions){
            Map<String, Object> model = new HashMap<String, Object>();
            model.put("article", article);
            String text = VelocityEngineUtils.mergeTemplateIntoString(velocityEngine,
                    NEW_ARTICLE_TEMPLATE_LOCATION, Constants.EMAIL_ENCODING, model);
            emailService.send(sendEmailFrom, subscription.getPerson().getEmail(),
                    subjectNewArticleNotification, text);
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

    public CategoryService getCategoryService() {
        return categoryService;
    }

    public void setCategoryService(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    public VelocityEngine getVelocityEngine() {
        return velocityEngine;
    }

    public void setVelocityEngine(VelocityEngine velocityEngine) {
        this.velocityEngine = velocityEngine;
    }

    public String getSendEmailFrom() {
        return sendEmailFrom;
    }

    public void setSendEmailFrom(String sendEmailFrom) {
        this.sendEmailFrom = sendEmailFrom;
    }

    public String getSubjectNewArticleNotification() {
        return subjectNewArticleNotification;
    }

    public void setSubjectNewArticleNotification(String subjectNewArticleNotification) {
        this.subjectNewArticleNotification = subjectNewArticleNotification;
    }
}
