import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subscriber } from '../../../node_modules/rxjs';
import { getLocaleExtraDayPeriods } from '../../../node_modules/@angular/common';
import { TestPipePipe } from '../test-pipe.pipe';

@Component({
  selector: 'app-http-rest',
  templateUrl: './http-rest.component.html',
  styleUrls: ['./http-rest.component.css']
})
export class HttpRestComponent implements OnInit {
  
  users:any;
  
  toDos:any[]=[];
  toDosFiltered:any[]=[];
  imageUrl:string= "";

   

  urlUsers:string ='https://jsonplaceholder.typicode.com/users';
  urlTodos:string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private myHttp:HttpClient) { }

  getUser(currentUserId:string):  void {
 // get user by user id 
  //  this.myHttp.get<any>(this.urlUsers + '/' + currentUserId ).subscribe(response=> this.users = response);
  let myResponse =  this.myHttp.get<any>(this.urlUsers + '/' + currentUserId );
  myResponse.subscribe((response) => {this.users = response;} );
   
// get todo list and filter it by user id 
     this.myHttp.get<any[]>(this.urlTodos).subscribe(response => this.toDos = response);
     this.toDosFiltered = this.toDos.filter(x=> x.userId == currentUserId);
   }

changeImage(){
  this.imageUrl =
  'https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&h=350';
}
  ngOnInit() {
  }

}
