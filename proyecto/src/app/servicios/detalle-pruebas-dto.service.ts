import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetallePruebasDTOService {
  private pruebas: Prueba[] = [
    {
      num:'1',
      fecha:"1",
      ultimoFallo:""
     
    },
    {
      num:'2',
      fecha:"2",
      ultimoFallo:""
     
    },
    {
      num: '3',
      fecha:"3",
      ultimoFallo:""
    }
    ];

    constructor() {
        console.log("Sercicio listo para usar!!!!");
    }
    getDetallePruebas(): Prueba[] {
        return this.pruebas;
    }
    getPruebas(idx: string) {
        return this.pruebas[idx];
    }
   
    // getbuscarDetalle(clave: string) {
    //   let PruebasArr: Prueba[] = [];
    //   clave = clave.toLowerCase();

    //   for (let i = 0; i<this.pruebas.length; i++ ) {
    //     let prueba = this.pruebas[i];
    //     let nombre = prueba.num.toLowerCase();
    //     if ( nombre.indexOf(clave) >= 0) {
    //         prueba.idx = i
    //       PruebasArr.push(prueba)  
    //     }
    //   }
    //  return PruebasArr
    // }
}

export interface Prueba {
    num: string;
    fecha: string;
    ultimoFallo: string;
    // idx?: number;
}

