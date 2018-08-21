import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
  // public compBstr:string="";

  constructor() { }

  @Output()
  dataToCompA:EventEmitter<string>=new EventEmitter<string>();
  
  sendText(str:string):void{
  
  }

  textFromChild(message:string):void {
    
  //  this.compBstr= message;
    //console.log(message);
    this.dataToCompA.emit(message);
  }

  

  ngOnInit() {
  }

}
