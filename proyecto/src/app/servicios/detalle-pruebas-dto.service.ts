import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DetallePruebasDTOService {
  private pruebas: Prueba[] = [
    {
      num:0,
      fecha:"0",
      ultimoFallo:""
     
    },
    {
      num:1,
      fecha:"1",
      ultimoFallo:""
     
    },
    {
      num: 2,
      fecha:"2",
      ultimoFallo:""
    }
    ];

    private itemSelecionado: Prueba = {
      num:null,
      fecha:null,
      ultimoFallo:null
    };

    constructor() {
        console.log("Servicio detalle listo para usar!!!!");
    }
    getDetallePruebas(): Prueba[] {
        return this.pruebas;
    }
    getPruebas(idx: string) {
        return this.pruebas[idx];
    }
    setItem(id){
      this.pruebas.forEach(prueba => {
        if (prueba.num == id){
          this.itemSelecionado.num = prueba.num;
          this.itemSelecionado.fecha = prueba.fecha;
          this.itemSelecionado.ultimoFallo = prueba.ultimoFallo;

        }
      })
    }
    
   getInfo(){
    
     return this.itemSelecionado;
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
    num: number;
    fecha: string;
    ultimoFallo: string;
    // idx?: number;
}



