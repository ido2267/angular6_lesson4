import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp-d',
  templateUrl: './comp-d.component.html',
  styleUrls: ['./comp-d.component.css']
})
export class CompDComponent implements OnInit {
  @Output()
  dataToParent:EventEmitter<string>=new EventEmitter<string>();
  
  constructor() { }
  sendText(str:string):void{
   this.dataToParent.emit(str);
  }

  ngOnInit() {
  }

}
