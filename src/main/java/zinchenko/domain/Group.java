package zinchenko.domain;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonManagedReference;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@Entity
@Table(name = "group_article")
public class Group implements Serializable {

    @Id
    @Column(name = "group_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonManagedReference
//    @JsonIgnore
    @OneToMany(mappedBy = "group")//fetch = FetchType.EAGER)//, mappedBy = "group")
//    @JoinTable(name = "group_article_category", joinColumns = @JoinColumn(name = "category_id"),
//            inverseJoinColumns = @JoinColumn(name = "group_id"))
    private List<Category> categories;

    @Override
    public boolean equals(Object obj) {
        if (obj == null) { return false; }
        if (obj == this) { return true; }
        if (obj.getClass() != getClass()) {
            return false;
        }
        Group group = (Group) obj;
        return new EqualsBuilder()
                .append(id, group.id)
                .append(name, group.name)
                .append(categories, group.categories)
                .isEquals();
    }

    public int hashCode() {
        return new HashCodeBuilder(17, 37).
                append(id).
                append(name).
                append(categories).
                toHashCode();
    }

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
