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
@Table(name="ARTICLE")
public class Article {

    @Id
    @Column(name = "ARTICLE_ID")
    private Long id;

    @Column(name="TITLE")
    private String title;

    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
