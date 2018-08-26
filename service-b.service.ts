import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoList} from './todo-list'
import {UserObj} from './user-obj'

 

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  private usersUrl:string='https://jsonplaceholder.typicode.com/users';
  private todosUrl:string=' https://jsonplaceholder.typicode.com/todos';
  currObj:UserObj;
  currList:TodoList;
  public usersArray :UserObj[]=[];
  anyArray:any[]=[];
  currTodo:TodoList[]=[];
   myTitle:string="";
  constructor(private serviceHttp:HttpClient) { }

  getUsers():void{
    this.serviceHttp.get<any[]>(this.usersUrl).subscribe(response =>
      {
          for (var i = 0 ; i < response.length; i++)
       { this.currObj = new UserObj(response[i].name,response[i].id);
        this.usersArray.push(this.currObj);
         }
      })
     
   }

   getUsersTitle():TodoList[]{
    this.serviceHttp.get<any[]>(this.todosUrl).subscribe(response =>  {
    //console.log('length ' + this.anyArray.length);
     for (var i = 0 ; i < response.length; i++)
    { 
      this.currList = new TodoList(response[i].title,response[i].userId); 
      this.currTodo.push(  this.currList);
    }});
     
    return this.currTodo;

   }
}
