package zinchenko.service;

import zinchenko.domain.Article;
import zinchenko.domain.Group;

import java.util.List;

/**
 * User: zinchenko
 * Date: 22.02.14
 */
public interface GroupService {

    List<Group> findAll();

    Group find(Long id);

    Long save(Group article);

    void update(Group group);

    void delete(Long id);

}
