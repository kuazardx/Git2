import { Injectable } from '@angular/core';
import { DatosDTOService } from './datos-dto.service';


@Injectable({
  providedIn: 'root'
})
export class GraficoBarraDtoService {

  public graficoBarraBool:boolean =false;


  private itemSelecionado = {
    id : null,
    datos: [] ,
    label: [],
  };


  constructor(public _datosDTOService: DatosDTOService ) {
    console.log("Servicio G.Barra listo para usar!!!!");
}


setVisible(){
  this.graficoBarraBool =true
}
setInvisible(){
  this.graficoBarraBool =false
}
getVisible(){
  return this.graficoBarraBool;
}

setItem(datos){  
      
        this.itemSelecionado.id = datos.id;
        this.itemSelecionado.datos = datos.datos;
        this.itemSelecionado.label = datos.label;
        this.graficoBarraBool = true
}
setItemDatos(datos){  
  this.itemSelecionado.datos = datos;
  this.graficoBarraBool = true
}
setItemID(datos){  
  this.itemSelecionado.id = datos;
}
setItemLabel(datos){  
  this.itemSelecionado.label = datos;
}


getInfo(){

 return this.itemSelecionado;
}

}

