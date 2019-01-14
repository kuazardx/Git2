import { Component } from '@angular/core';

@Component({
  selector: 'app-detallebarra',
  templateUrl: './detallebarra.component.html',
  styles: []
})
export class DetallebarraComponent {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

 

  public barChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','3', '4'];
  data2:number[] = [65, 59, 80, 81, 56];
  colores:string[] = ['green', 'blue', 'blueviolet','red','orange']
  public barChartData:any[] = [{data: this.data2 , label: this.barChartLabels[0], fill: this.colores[0]}]; //,{data:[70] , label: this.barChartLabels[1]}
  public barChartType:string = 'bar'; 




  // events
  public chartClicked(e:any):void {
    console.log('e--->', e);
    let arr = e.active[0];
   console.log(arr._model.label);
   
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  seleccion(a){  
    console.log('a',a)
    }
}