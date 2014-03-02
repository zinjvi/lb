package zinchenko.service.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.ui.velocity.VelocityEngineFactory;
import org.springframework.ui.velocity.VelocityEngineUtils;
import zinchenko.service.EmailService;

import java.text.MessageFormat;

@Service
public class SpringEmailService implements EmailService {

    private static final Log LOG = LogFactory.getLog(SpringEmailService.class);

    @Autowired
    private JavaMailSender sender;

    @Override
    public void send(String from, String to, String subject, String text) {
        //TODO | can I replace Message format with other engine.
        //TODO | I want for not debug laval don't do any work to form string.
        LOG.debug(MessageFormat.format("Sending email from {0} with subject {1}", from, subject));
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        // TODO | provide check existing smtp server
        sender.send(message);
        LOG.debug("Was sent email");
    }

    public JavaMailSender getSender() {
        return sender;
    }

    public void setSender(JavaMailSender sender) {
        this.sender = sender;
    }

}
