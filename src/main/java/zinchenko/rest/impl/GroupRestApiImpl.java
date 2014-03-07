package zinchenko.rest.impl;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import zinchenko.domain.Group;
import zinchenko.rest.GroupRestApi;
import zinchenko.service.GroupService;

import javax.ws.rs.core.Response;
import java.util.List;

public class GroupRestApiImpl implements GroupRestApi {

    private static final Log LOG = LogFactory.getLog(GroupRestApiImpl.class);

    @Autowired
    GroupService groupService;

    @Override
    public List<Group> findAll() {
        return groupService.findAll();
    }

    @Override
    public Group find(Long id) throws Exception {
        return groupService.find(id);
    }

    @Override
    public Response save(Group group) {
        groupService.save(group);
        return Response.status(Response.Status.OK).build();
    }

    @Override
    public Response update(Group group) {
        groupService.update(group);
        return Response.status(Response.Status.OK).build();
    }

    @Override
    public Response delete(Long id) {
        groupService.delete(id);
        return Response.status(Response.Status.OK).build();
    }

    public GroupService getGroupService() {
        return groupService;
    }

    public void setGroupService(GroupService groupService) {
        this.groupService = groupService;
    }
}
