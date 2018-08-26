import { Pipe, PipeTransform } from '@angular/core';
import {TodoList }             from './todo-list' ;

@Pipe({
  name: 'todoPipe'
})
export class TodoPipePipe implements PipeTransform {
     str:string[]=[];   
     currTodo:TodoList[];
  transform(value: TodoList[],userId:number ): string [] {
   this.currTodo = value.filter(x => x.userId==userId) 

   this.str = this.currTodo.map(x=> x.title);    

   return this.str;
  }

}
