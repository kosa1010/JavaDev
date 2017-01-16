package com.kosa1010.repository;

import com.kosa1010.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by kosa1010 on 16.12.16.
 */
@Repository
public class UserRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public User add(User u) {
        try {
            entityManager.persist(u);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return u;
    }

    public List<User> findAll() {
        TypedQuery query = entityManager.createQuery("select u from User u", User.class);
        return query.getResultList();
    }

    @Transactional
    public ResponseEntity deleteUser(long id) {
        User u = entityManager.find(User.class, id);
        ResponseEntity r = new ResponseEntity(u, HttpStatus.OK);
        if (u == null) {
            r = new ResponseEntity(HttpStatus.NOT_FOUND);
        } else
            entityManager.remove(u);
        return r;
    }

    @Transactional
    public User findUser(long id) {
        return entityManager.find(User.class, id);
    }

    @Transactional
    public ResponseEntity editUser(long id, User u) {
        User user = entityManager.find(User.class, id);
        if (u.equals(null)) {
            return new ResponseEntity(u, HttpStatus.BAD_REQUEST);
        }
        entityManager.merge(u);

//        entityManager
//                .createQuery("update User set name  where id like :id").setParameter("id", id);
//                .executeUpdate();
        return new ResponseEntity(u, HttpStatus.OK);
    }
}
