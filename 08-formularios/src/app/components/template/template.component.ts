import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: "Marcelo",
    apellido: "Concha",
    correo: ""
  }
  constructor() { }

guardar(forma:NgForm){
  
  console.log("ngForm" , forma);
  console.log("Valor" , forma.value);
 console.log("usuario" , this.usuario);
}
}
