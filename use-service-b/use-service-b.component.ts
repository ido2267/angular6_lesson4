import { Component, OnInit,AfterContentInit } from '@angular/core';
import {ServiceBService}     from '../service-b.service';
import {UserObj}             from '../user-obj'     ;
import {TodoList}            from '../todo-list'     
import {TodoPipePipe}        from '../todo-pipe.pipe'       ;



@Component({
  selector: 'app-use-service-b',
  templateUrl: './use-service-b.component.html',
  styleUrls: ['./use-service-b.component.css']
})
export class UseServiceBComponent implements OnInit { 
  currArray :UserObj[]=[];
  todoArray:TodoList[]=[];

  constructor( public  serviceInstance:ServiceBService) { }
 
  ngOnInit() {
      this.serviceInstance.getUsers(); 
      this.currArray = this.serviceInstance.usersArray;
      this.todoArray =  this.serviceInstance.getUsersTitle();
 }

}