package zinchenko.dao.impl;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import zinchenko.dao.GroupDao;
import zinchenko.domain.Group;

import java.util.List;

/**
 * User: zinchenko
 * Date: 16.02.14
 */
@Repository
public class GroupDaoImpl extends AbstractDao implements GroupDao{

    @Override
    @Transactional(readOnly = true)
    public List<Group> findAll() {
        return getCurrentSession()
                .createQuery("select distinct g from Group g left join fetch g.categories")
                .list();
    }

    @Override
    @Transactional(readOnly = true)
    public Group find(Long id) {
        return (Group)getCurrentSession()
                .createQuery("select distinct g from Group g left join fetch g.categories where g.id = :id")
                .setParameter("id", id)
                .uniqueResult();
    }

    @Override
    @Transactional
    public Long save(Group group) {
        return (Long) getCurrentSession().save(group);
    }

    @Override
    @Transactional
    public void update(Group group) {
        getCurrentSession().update(group);
    }

    @Override
    @Transactional
    public void delete(Group group) {
        getCurrentSession().delete(group);
    }
}
