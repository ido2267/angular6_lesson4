import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAService {
   
 private url:string='https://jsonplaceholder.typicode.com/users';
 public usersArray:any[]=[];
  arrayFiltered:any[]=[];
  firstMatch:any;
 constructor(private serviceHttp:HttpClient) { }

  updateEmail(phrase:string, userEmail:string):boolean
  {
    
    var result:boolean=false;

    this.firstMatch  = this.getFirstMatch(phrase);
    if (this.firstMatch)
     { 
       this.firstMatch.email = userEmail; // update the email
      this.serviceHttp.put<any>(this.url,this.firstMatch).subscribe(() => {});
      result = true;
    }
    return result;

  }  
    
    
// retrieve the relevent json

getFirstMatch(phrase:string):any {
    // get all the users
     
 this.serviceHttp.get<any[]>(this.url).subscribe(response => this.usersArray = response);
  
//   this.arrayFiltered = this.usersArray.filter(x=> this.matchFound(x.name, phrase));

for (var i = 0 ; i <  this.usersArray.length; i++ )
      {
              if ( this.matchFound(this.usersArray[i].name, phrase)  )
              {
                return this.usersArray[i];
              }
      }

  
     return null;
}
// check if the phrase is in the given user name 
matchFound(str:string, phrase:string):boolean
 {   
    var spacePos:number=0;
     var endUserName = str.length;
    var searchString:string  = phrase;
    var substr:string;
     spacePos = str.search(' ') + 1;
     substr   = str.substring(spacePos,endUserName);
    if (  substr.match(searchString)  )
    {return true;}
    else{
      return false;
    }
    ;
   
    
  }
  
}
