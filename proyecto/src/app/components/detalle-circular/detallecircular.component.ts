import { Component } from '@angular/core';

@Component({
  selector: 'app-detallecircular',
  templateUrl: './detallecircular.component.html'
 
})
export class DetallecircularComponent  {


 // Doughnut
 public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 public doughnutChartData:number[] = [350, 450, 100];
 public doughnutChartType:string = 'doughnut';

 // events
  public chartClicked(e:any):void {
    let arr = e.active[0];
    console.log(arr);
   console.log(arr._index);
   
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
 barra(event){
console.log('event',event)
}
}