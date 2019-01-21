import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GraficoCirculoDtoService {


  private GraficocirculoBool:boolean =false;
  
  private graficos: Grafico[]= [
    {
        id : 0,
        datos: [65, 59, 80, 81, 56],
        label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
     
    },
    {
        id: 1,
        datos : [20, 45, 93, 81, 100],
        label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
     
    },
    {
        id: 2,
        datos :[80, 20, 30, 10, 77],
        label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
    },
    {
        id: 3,
        datos :[30, 60, 45, 40, 30],
        label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
    },
    {
        id: 4,
        datos :[70, 80, 47, 73, 60],
        label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
    }
  ]
  private itemSelecionado: Grafico = {
    id : null,
    datos: [] ,
    label: [],
  };


  constructor() {
    console.log("Servicio G.Circular listo para usar!!!!");
}
getDetalleGraficos(): Grafico[] {
    return this.graficos;
}
getGraficos(idx: string) {
    return this.graficos[idx];
}
setItem(id){
  this.graficos.forEach(grafico => {
    if (grafico.id == id){
      this.itemSelecionado.id = grafico.id;
      this.itemSelecionado.datos = grafico.datos;
      this.itemSelecionado.label = grafico.label;
      console.log('setC if')
    }
  })
  console.log('setC',this.itemSelecionado)
}
getInfo(){
 console.log('getInfo  this.itemSelecionado',this.itemSelecionado)
 return this.itemSelecionado;
}

}
export interface Grafico {
  id: number;
  datos : number[];
  label: string[];
}

