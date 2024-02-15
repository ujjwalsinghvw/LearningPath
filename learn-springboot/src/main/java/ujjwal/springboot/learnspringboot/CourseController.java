package ujjwal.springboot.learnspringboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CourseController {
    @RequestMapping("/courses")
    public List<Course> retrieveAllCourses(){
        return Arrays.asList(
                new Course(1, "Learn Angular", "Udemy"),
                new Course(2, "Learn Springboot", "Udemy"),
                new Course(3, "Learn Springboot", "Udemy")
        );
    }
}
