import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]

})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    sexo: "Hombre",
    pais: "",
    acepta: false
  }

  paises = [{
    codigo: "CHL",
    nombre:"Chile"
  },
  {
    codigo: "CRI",
    nombre:"Costa Rica"
  },
  {
    codigo: "ESP",
    nombre:"España"
  },
  {
    codigo: "COL",
    nombre:"Colombia"
  },
  {
    codigo: "FRA",
    nombre:"Francia"
  }]

  sexos:string [] = [ "Hombre", "Mujer", "Sin definir" ]
  constructor() { }

guardar(forma:NgForm){
  
  console.log("ngForm" , forma);
  console.log("Valor" , forma.value);
 console.log("usuario" , this.usuario);
}
}
