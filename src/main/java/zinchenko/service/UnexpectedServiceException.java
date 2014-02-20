package zinchenko.service;

/**
 * User: zinchenko
 * Date: 20.02.14
 */
public class UnexpectedServiceException extends RuntimeException {

    public UnexpectedServiceException(Throwable cause) {
        super(cause);
    }

    public UnexpectedServiceException() {
    }

    public UnexpectedServiceException(String message) {
        super(message);
    }

    public UnexpectedServiceException(String message, Throwable cause) {
        super(message, cause);
    }
}
