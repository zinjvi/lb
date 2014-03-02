package zinchenko.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

/**
 * User: zinchenko
 * Date: 25.02.14
 */
@Entity
@Table(name = "person")
public class Person {

    @Id
    @Column(name="person_id")
    private Long id;

    @Column(name="email")
    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
