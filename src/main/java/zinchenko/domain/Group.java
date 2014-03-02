package zinchenko.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@Entity
@Table(name="group_article")
public class Group implements Serializable {

    @Id
    @Column(name="group_id")
    private Long id;

    @Column(name="name")
    private String name;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Category> categories;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }
}
