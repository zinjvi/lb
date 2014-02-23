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
        return getCurrentSession().createCriteria(Group.class).list();
    }

    @Override
    @Transactional(readOnly = true)
    public Group find(Long id) {
        return (Group) getCurrentSession().get(Group.class, id);
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
