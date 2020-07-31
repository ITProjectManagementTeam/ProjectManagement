package pm.service;

import org.springframework.stereotype.Service;
import pm.dao.UserDao;

import javax.annotation.Resource;

@Service
public class UserServiceImpl {
    @Resource
    UserDao userDao;


}
