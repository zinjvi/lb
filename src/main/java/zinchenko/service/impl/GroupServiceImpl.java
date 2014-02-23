package zinchenko.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zinchenko.dao.GroupDao;
import zinchenko.domain.Group;
import zinchenko.service.GroupService;

import java.util.List;

/**
 * User: zinchenko
 * Date: 22.02.14
 */
@Service
public class GroupServiceImpl implements GroupService {

    @Autowired
    GroupDao groupDao;

    @Override
    public List<Group> findAll() {
        return groupDao.findAll();
    }

    @Override
    public Group find(Long id) {
        return groupDao.find(id);
    }

    @Override
    public Long save(Group group) {
        return groupDao.save(group);
    }

    @Override
    public void update(Group group) {
        groupDao.update(group);
    }

    @Override
    public void delete(Long id) {
        Group group = new Group();
        group.setId(id);
        groupDao.delete(group);
    }
}
