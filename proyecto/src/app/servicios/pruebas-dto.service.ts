import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebasDTOService {
  private proyectos: Proyecto[] = [
    {
      num:1,
      nombre:"1",
      numpruebas:"",
      ultimoExito:"",
      ultimoFallo:"",
      ultimaDuracion:"",
      ultimoPush:""
    },
    {
      num:2,
      nombre:"2",
      numpruebas:"",
      ultimoExito:"",
      ultimoFallo:"",
      ultimaDuracion:"",
      ultimoPush:""
    },
    {
      num: 3,
      nombre:"3",
      numpruebas:"",
      ultimoExito:"",
      ultimoFallo:"",
      ultimaDuracion:"",
      ultimoPush:""
    }
    ];

    constructor() {
        console.log("Sercicio listo para usar!!!!");
    }
    getProyectos(): Proyecto[] {
        return this.proyectos;
    }
    getProyecto(idx: string) {
        return this.proyectos[idx];
    }
   
    getbuscarHeroes(clave: string) {
      let proyectosArr: Proyecto[] = [];
      clave = clave.toLowerCase();

      for (let i = 0; i<this.proyectos.length; i++ ) {
        let proyecto = this.proyectos[i];
        let nombre = proyecto.nombre.toLowerCase();
        if ( nombre.indexOf(clave) >= 0) {
          proyecto.idx = i
          proyectosArr.push(proyecto)  
        }
      }
     return proyectosArr
    }
}

export interface Proyecto {
    num: number;
    nombre: string;
    numpruebas: string;
    ultimoExito:  string;
    ultimoFallo: string;
    ultimaDuracion: string;
    ultimoPush: string;
    idx?: number;
}