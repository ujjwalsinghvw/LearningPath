package com.springboot.learn.jpahibernate.course.springdatajpa;

import com.springboot.learn.jpahibernate.course.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseSpringDataJpaRepository extends JpaRepository<Course, Long> {

}
