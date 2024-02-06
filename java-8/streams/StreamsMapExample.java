package com.learnJava.streams;

import com.learnJava.data.Student;
import com.learnJava.data.StudentDataBase;

import java.util.List;
import java.util.stream.Collectors;

public class StreamsMapExample {

    public static List<String> studentslist(){
        List<String> studentList = StudentDataBase.getAllStudents().stream()
                .map(Student::getName)
                .map(String::toUpperCase)
                .collect(Collectors.toList());

        return studentList;


    }

    public static void main(String[] args){
        System.out.println(studentslist());
    }
}
