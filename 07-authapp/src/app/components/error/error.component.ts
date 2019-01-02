import { Component } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
 // styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor() { }


  mensajeError(){
    console.warn("Este es un mensaje de error.component");
    
  }


  
}
