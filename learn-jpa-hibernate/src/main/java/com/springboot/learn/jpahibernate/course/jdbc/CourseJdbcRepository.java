package com.springboot.learn.jpahibernate.course.jdbc;

import com.springboot.learn.jpahibernate.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJdbcRepository {
    @Autowired
    private JdbcTemplate jt;
    private static String INSERT_QUERY =
            """
               insert into course (id, name, author) 
               values(?, ?, ?);
            """;
    private static String DELETE_QUERY =
            """
               delete from course where id=?;
            """;

    private static String SELECT_QUERY =
            """
               select * from course where id=?;
            """;
    public void insert(Course course){
        jt.update(INSERT_QUERY,course.getId(),course.getName(), course.getAuthor());
    }
    public void delete(long id){
        jt.update(DELETE_QUERY,id);
    }

    //ResultSet -> Bean => RowMapper
    public Course select(long id){
       return jt.queryForObject(SELECT_QUERY, new BeanPropertyRowMapper<>(Course.class), id );
    }


}
