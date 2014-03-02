package zinchenko.dao.impl;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.SubscriptionDao;
import zinchenko.domain.Subscription;

import java.util.List;

@Repository
public class SubscriptionDaoImpl extends AbstractDao implements SubscriptionDao {

    @Override
    @Transactional
    @Deprecated
    public List<Subscription> findByArticleId(Long articleId) {
        Criteria criteria = getCurrentSession().createCriteria(Subscription.class);
//        Criteria articleCriteria = criteria.createCriteria("person");
//        articleCriteria.add(Restrictions.eq("id", articleId));
        return criteria.list();
    }

    @Override
    @Transactional
    public List<Subscription> findByCategoryId(Long categoryId) {
        Criteria criteria = getCurrentSession().createCriteria(Subscription.class);
        Criteria articleCriteria = criteria.createCriteria("category");
        articleCriteria.add(Restrictions.eq("id", categoryId));
        return criteria.list();
    }
}
