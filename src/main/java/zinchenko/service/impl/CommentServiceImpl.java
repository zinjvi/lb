package zinchenko.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.ui.velocity.VelocityEngineUtils;
import zinchenko.Constants;
import zinchenko.dao.CommentDao;
import zinchenko.dao.SubscriptionDao;
import zinchenko.domain.Article;
import zinchenko.domain.Comment;
import zinchenko.domain.Subscription;
import zinchenko.service.CommentService;
import zinchenko.service.EmailService;
import zinchenko.service.MessageService;

import java.text.MessageFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("commentService")
public class CommentServiceImpl implements CommentService {

    private static final Log LOG = LogFactory.getLog(CommentServiceImpl.class);

    public static final String NEW_COMMENT_TEMPLATE_LOCATION = "/zinchenko/service/templates/newCommentEmailTemplate.vm";

    @Value("${email.from}")
    private String sendEmailFrom;

    @Value("${email.subject.new.comment.notification}")
    private String subjectNewCommentNotification;

    @Autowired
    private CommentDao commentDao;

    @Autowired
    private MessageService messageService;

    @Autowired
    private SubscriptionDao subscriptionDao;

    @Autowired
    private VelocityEngine velocityEngine;

    @Autowired
    private EmailService emailService;

    @Override
    public List<Comment> findAll() {
        return commentDao.findAll();
    }

    @Override
    public List<Comment> findByArticleId(Long articleId) {
        return commentDao.findByArticleId(articleId);
    }

    @Override
    public Comment find(Long id) {
        return commentDao.find(id);
    }

    @Override
    public Long save(Comment comment) {
        Long commentId = commentDao.save(comment);
        comment.setId(commentId);
        messageService.sendNewCommentToQueue(comment);
        return commentId;
    }

    @Override
    public void update(Comment comment) {
        commentDao.update(comment);
    }

    @Override
    public void delete(Long id) {
        Comment comment = new Comment();
        comment.setId(id);
        commentDao.delete(comment);
    }

    @Override
    public void sendEmailToCategorySubscribers(Comment comment) {
        // TODO | need use 'subscriptionService'
        List<Subscription> subscriptions = subscriptionDao
                .findByArticleId(comment.getArticle().getId());
        LOG.debug(MessageFormat.format("Article with id {0} has {1} subscribers",
                comment.getArticle().getId(), subscriptions.size()));
        for(Subscription subscription: subscriptions){
            Map<String, Object> model = new HashMap<String, Object>();
            model.put("comment", comment);
            String text = VelocityEngineUtils.mergeTemplateIntoString(velocityEngine,
                    NEW_COMMENT_TEMPLATE_LOCATION, Constants.EMAIL_ENCODING, model);
            emailService.send(sendEmailFrom, subscription.getPerson().getEmail(),
                    subjectNewCommentNotification, text);
        }
    }

    public CommentDao getCommentDao() {
        return commentDao;
    }

    public void setCommentDao(CommentDao commentDao) {
        this.commentDao = commentDao;
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

    public VelocityEngine getVelocityEngine() {
        return velocityEngine;
    }

    public void setVelocityEngine(VelocityEngine velocityEngine) {
        this.velocityEngine = velocityEngine;
    }

    public EmailService getEmailService() {
        return emailService;
    }

    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }


}
