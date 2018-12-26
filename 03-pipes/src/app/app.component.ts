import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Marcelo';

  nombre2 = 'marCelo andRes coNcha gonzalez'
  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe={
    nombre:"Logan",
    clave: "Wolverine",
    edad:500,
    direccion:{
calle:"primera",
casa:"19"
    }
  };

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Llego la data!"),3500);
  });

  fecha = new Date();

  video = "embed?pb=!1m18!1m12!1m3!1d425996.59945013665!2d-70.62983129999999!3d-33.47278794999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses-419!2scl!4v1545832543751";

  activar:boolean = true;


}
