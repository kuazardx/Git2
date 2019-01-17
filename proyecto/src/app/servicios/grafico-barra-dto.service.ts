import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GraficoBarraDtoService {

  private GraficoBarraBool:boolean =false;

  private graficos: Grafico[]= [
    {
      id : 0,
      datos: [65, 59, 80, 81, 56],
      label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
     
    },
    {
      id: 1,
      datos : [67, 65, 93, 81, 100],
      label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
     
    },
    {
      id: 2,
      datos :[80, 67, 53, 62, 77],
      label:['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
    }
  ]
  private itemSelecionado: Grafico = {
    id : null,
    datos: [] ,
    label: [],
  };


  constructor() {
    console.log("Servicio listo para usar!!!!");
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

    }
  })
  console.log('set',this.itemSelecionado)
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

