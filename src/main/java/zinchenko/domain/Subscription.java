package zinchenko.domain;

import javax.persistence.*;

@Entity
@Table(name="subscription")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="discriminator",
        discriminatorType = DiscriminatorType.STRING)
abstract public class Subscription {

    @Id
    @Column(name = "subscription_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "person_id")
    private Person person;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
