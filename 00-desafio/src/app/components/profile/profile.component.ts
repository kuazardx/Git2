import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuarios = [
    {
        "nombre": "Marcelo",
        "apellido":"Concha",
        "rut": "16.264.427-0",
        "fecha_n": "02-09-1985",
        "parentezco": "Original",
        "correo":"marcelo.concha85@gmail.com"
    },
    {
        "nombre": "Andres",
        "apellido":"Gonzalez",
        "rut": "16.264.427-1",
        "fecha_n": "02-09-1985",
        "parentezco": "Clone 1",
        "correo":"andres.gonzalez85@gmail.com"
    },
    {
        "nombre": "M.A",
        "apellido":"C.G",
        "rut": "16.264.427-1",
        "fecha_n": "02-09-1985",
        "parentezco": "Clone 2",
        "correo":"ma.cg85@gmail.com"
    }
]

nombreb: boolean = true;
apellidob: boolean = true;
rutb: boolean = true;
fecha_nb: boolean = true;
parentezcob: boolean = true;
correob: boolean = true;
activar:boolean = true;

  constructor() { }

  ngOnInit() {
    console.log("profile")
  }
}
