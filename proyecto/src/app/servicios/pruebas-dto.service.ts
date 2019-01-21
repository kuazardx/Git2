import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClienteDTO } from '../dto/cliente.dto'
import { HttpClient } from '@angular/common/http';



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

  // constructor(public http: HttpClient)  {
  //       console.log("Sercicio prueba listo para usar!!!!");
  //   }


  //   getClientes(): Observable<any> {
  //     //return this.http.get<CandidatoDTO[]>('/assets/datos/candidatos.json');
  //     return this.http.get('https://jsonplaceholder.typicode.com/posts');
  //   }
  
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data)
    });
}

public getJSON(): Observable<any> {
    return this.http.get('../json/data.json')
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