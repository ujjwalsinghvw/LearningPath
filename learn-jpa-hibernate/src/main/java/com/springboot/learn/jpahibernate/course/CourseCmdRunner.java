package com.springboot.learn.jpahibernate.course;

import com.springboot.learn.jpahibernate.course.jdbc.CourseJdbcRepository;
import com.springboot.learn.jpahibernate.course.jpa.CourseJpaRepo;
import com.springboot.learn.jpahibernate.course.springdatajpa.CourseSpringDataJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CourseCmdRunner implements CommandLineRunner {
//    @Autowired
//    private CourseJdbcRepository repo;

//    @Autowired
//    private CourseJpaRepo repo;

    @Autowired
    private CourseSpringDataJpaRepository repo;


    @Override
    public void run(String... args) throws Exception {
        repo.save(new Course(1, "learn jpa and hibernate", "in28minutes"));
        repo.save(new Course(2, "learn angular", "in28minutes"));
        repo.save(new Course(3, "learn springboot", "in28minutes"));
        repo.deleteById(1l);
        System.out.println(repo.findById(3l));

    }
}
