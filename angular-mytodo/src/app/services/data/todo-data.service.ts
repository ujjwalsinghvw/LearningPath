import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todos } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http : HttpClient ) {
   }

   retrieveAllTodos(username : String){
    return this.http.get<Todos[]>(`${API_URL}/${username}/todos`)
   }

   deleteTodo(username:string, id:number){
    return this.http.delete(`${API_URL}/${username}/todos/${id}`)
   }

   getTodo(username:string, id:number){
    return this.http.get<Todos>(`${API_URL}/${username}/todos/${id}`)
   }

   updateTodo(username:string, id:number, todo: Todos){
    return this.http.put(`${API_URL}/${username}/todos/${id}`, todo)
   }

   createTodo(username:string, todo: Todos){
    return this.http.post(`${API_URL}/${username}/todos`, todo)
   }
}
