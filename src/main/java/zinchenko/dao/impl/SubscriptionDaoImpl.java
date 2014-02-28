package zinchenko.dao.impl;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.SubscriptionDao;
import zinchenko.domain.Subscription;

import java.util.List;

public class SubscriptionDaoImpl extends AbstractDao implements SubscriptionDao {

    @Override
    @Transactional
    public List<Subscription> findByArticleId(Long articleId) {
        Criteria criteria = getCurrentSession().createCriteria(Subscription.class);
        Criteria articleCriteria = criteria.createCriteria("person");
        articleCriteria.add(Restrictions.eq("id", articleId));
        return criteria.list();
    }
}
