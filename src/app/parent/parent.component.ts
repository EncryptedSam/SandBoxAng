import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  x:number = 0;
  y:number = 0;
  z:number;
  sum(args){
    this.z = args;
  }

  ngOnInit(): void {
  }

}
