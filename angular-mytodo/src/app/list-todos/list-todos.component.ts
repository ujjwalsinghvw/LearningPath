import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todos  {
  constructor(
    public id : number,
    public description : string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Array<Todos> = []
  // [
  //   new Todos(1,"Task 1", true, new Date()),
  //   new Todos(2,"Task 2", false, new Date()),
  //   new Todos(3,"Task 3", false, new Date())
  // ]

  constructor(private todoService: TodoDataService, private router: Router) { }

  message:string = ""

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos("Archie").subscribe(
      response => {
        console.log(response);
        this.todos = response

      }
    )
  }

  deleteTodo(id:number){
    console.log("delete todo"+ id)
    this.todoService.deleteTodo("Archie", id).subscribe(
      response => {
        console.log(response);
        this.message = `Deleted todo ${id} successfully!`
        this.refreshTodos();
      }
    )
  }
  updateTodo(id:number){
    console.log("update todo"+ id);
    this.router.navigate(['todos',id]);
   }

   addTodo(){
    this.router.navigate(['todos',-1]);
   }

}
