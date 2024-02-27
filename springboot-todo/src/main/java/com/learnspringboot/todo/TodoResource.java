package com.learnspringboot.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoservice;
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoservice.findAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoservice.findById(id);
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> saveTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
         Todo updatedTodo = todoservice.saveTodo(todo);
         return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo){
        Todo createdTodo = todoservice.saveTodo(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deletetodo(@PathVariable String username, @PathVariable long id ){
    Todo todo = todoservice.deleteById(id);
    if(todo != null) return ResponseEntity.noContent().build();
    return ResponseEntity.notFound().build();

    }
}
