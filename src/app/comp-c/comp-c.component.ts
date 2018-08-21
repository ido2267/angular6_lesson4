import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  @Input()
  dataFromParent:string="Nothing to show yet";
  @Input()
  newText:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
