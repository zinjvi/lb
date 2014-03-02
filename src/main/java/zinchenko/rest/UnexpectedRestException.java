package zinchenko.rest;

/**
 * User: zinchenko
 * Date: 20.02.14
 */
public class UnexpectedRestException extends RuntimeException {

    public UnexpectedRestException(Throwable cause) {
        super(cause);
    }

    public UnexpectedRestException() {
    }

    public UnexpectedRestException(String message) {
        super(message);
    }

    public UnexpectedRestException(String message, Throwable cause) {
        super(message, cause);
    }
}
