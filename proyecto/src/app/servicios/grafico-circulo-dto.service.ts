import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GraficoCirculoDtoService {


  private graficocirculoBool:boolean =false;
  private graficocirculoEsBool:boolean =false;
  
  private itemSelecionado: Grafico = {
    id : null,
    datos: [] ,
    label: [],
  };
  constructor() {
    console.log("Servicio G.Circular listo para usar!!!!");
}
setItem(datos){  
      
  this.itemSelecionado.id = datos.id;
  this.itemSelecionado.datos = datos.datos;
  this.itemSelecionado.label = datos.label;

console.log('set G.Circulo',this.itemSelecionado)
console.log('datos enviados G.Circulo',datos)
}

setItemId(datos){
  this.itemSelecionado.id = datos;
}
setItemDatos(datos){
  this.itemSelecionado.datos = datos;
}
setItemLabel(datos){
  this.itemSelecionado.label = datos;

} 
getInfo(){
 console.log('getInfo  this.itemSelecionado',this.itemSelecionado)
 return this.itemSelecionado;
}
setVisible(){
  this.graficocirculoBool =true
}
setInvisible(){
  this.graficocirculoBool =false
}
setVisibleEsp(){
  this.graficocirculoEsBool =true
}
setInvisibleEsp(){
  this.graficocirculoEsBool =false
}
getVisible(){
  return this.graficocirculoBool;
}
getVisibleEsp(){
  return this.graficocirculoEsBool;
}
}
export interface Grafico {
  id: number;
  datos : number[];
  label: string[];
}

