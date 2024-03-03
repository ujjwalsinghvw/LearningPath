package com.springboot.learn.jpahibernate.course.jpa;

import com.springboot.learn.jpahibernate.course.Course;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class CourseJpaRepo {
    @PersistenceContext
    private EntityManager em;

    public void insert (Course c){
        em.merge(c);
    }

    public Course findById(long id){
        return em.find(Course.class, id);
    }

    public void deleteById(long id){
        Course c = em.find(Course.class, id);
        em.remove(c);
    }
}
