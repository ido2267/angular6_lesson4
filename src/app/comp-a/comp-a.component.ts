import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  
  @Input()
  compAstr:string=""; 
  @Input ()
  bol:boolean= false;


  constructor() { }
  
  textFromCompb(message:string):void {
    
      this.compAstr= message;
      this.bol = true;
     
    }
  
  ngOnInit() {
  }

}
