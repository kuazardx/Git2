import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("error")
  }
  click(){
    console.log("click volver")
  }
}
