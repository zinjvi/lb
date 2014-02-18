package zinchenko.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@Entity
@Table(name="category")
public class Category {

    @Id
    @Column(name = "category_id")
    private Long id;

    @Column(name="name")
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}