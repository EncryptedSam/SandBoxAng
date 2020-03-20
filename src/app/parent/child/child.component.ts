import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() x:string;
  @Input() y:string;

  @Output() emitter = new EventEmitter<number>();

  addNumbers(){
    let sum:number = parseInt(this.x) + parseInt(this.y);
    this.emitter.emit(sum);
  }

  ngOnInit(): void {
  }

}
