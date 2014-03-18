package zinchenko.domain;

import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * User: zinchenko
 * Date: 25.02.14
 */
@Entity
@Table(name = "comment")
public class Comment implements Serializable {

    @Id
    @Column(name = "comment_id")
    private Long id;

    @Column(name = "content")
    private String content;

    //TODO | Is there need this field?
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
