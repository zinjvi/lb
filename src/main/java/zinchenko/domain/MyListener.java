package zinchenko.domain;

import javax.persistence.PrePersist;

public class MyListener {

    @PrePersist
    public void l(Comment comment) {
        System.out.println(comment);
    }
}
