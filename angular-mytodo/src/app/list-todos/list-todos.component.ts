import { Component, OnInit } from '@angular/core';

export class Todos  {
  constructor(
    public id : number,
    public desc : string,
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

  todos = [
    new Todos(1,"Task 1", true, new Date()),
    new Todos(2,"Task 2", false, new Date()),
    new Todos(3,"Task 3", false, new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
