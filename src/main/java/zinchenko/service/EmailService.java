package zinchenko.service;

public interface EmailService {

    void send(String from, String to, String subject, String text);

}
