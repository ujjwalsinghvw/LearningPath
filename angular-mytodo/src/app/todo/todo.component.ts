import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todos } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number =-1;
  todo:Todos = new Todos(this.id,"",false, new Date());

  constructor(private service : TodoDataService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    if(this.id != -1){
    this.service.getTodo("Archie",this.id).subscribe(
      response=> {
        this.todo=response;
        console.log(this.todo)
      }

    )
    }
    
  }

  
  saveTodo():void {
    if(this.id != -1){
    this.service.updateTodo("Archie", this.id, this.todo).subscribe(
      response=> {
        console.log(response);
        this.router.navigate(['todos'])
      }
    )
  }
  else{
    this.service.createTodo("Archie", this.todo).subscribe(
      response=> {
        console.log(response);
        this.router.navigate(['todos'])
      }
    )
  }
}
}


