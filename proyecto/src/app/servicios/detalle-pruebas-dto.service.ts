import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetallePruebasDTOService {


    public itemSelecionado = {
      num:null,
      fecha:null,
      ultimoFallo:null
    };
    constructor() {
        console.log("Servicio detalle listo para usar!!!!");
    }
    getDetallePruebas() {
        return this.itemSelecionado;
    }
    getPruebas(idx: string) {
        return this.itemSelecionado[idx];
    }
    setItem(datos){
          this.itemSelecionado.num = datos.id;
          this.itemSelecionado.fecha = datos.ejecucion;
          this.itemSelecionado.ultimoFallo = datos.fallo;
        console.log('set detalle prebas', datos)
        } 
   getInfo(){   
     return this.itemSelecionado;
   }

}




