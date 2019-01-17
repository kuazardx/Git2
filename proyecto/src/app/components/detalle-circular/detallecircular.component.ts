import { Component, OnInit, DoCheck } from '@angular/core';
import { GraficoCirculoDtoService , Grafico } from '../../servicios/grafico-circulo-dto.service';
import { GraficoBarraDtoService } from '../../servicios/grafico-barra-dto.service';
@Component({
  selector: 'app-detallecircular',
  templateUrl: './detallecircular.component.html'
 
})
export class DetallecircularComponent implements OnInit, DoCheck  {


  selectCirculo;

  dat: Grafico = {
  id : null,
  label: [],
  datos : []
};

  constructor(private _graficoCirculoDtoService: GraficoCirculoDtoService, private _graficoBarraDtoService:GraficoBarraDtoService){}


  ngOnInit(){
    this.selectCirculo = this._graficoBarraDtoService.getInfo();
    this.dat = this._graficoCirculoDtoService.getInfo();
  }

  ngDoCheck(){
    this.doughnutChartData = this.dat.datos;
    //this.doughnutChartLabels = this.dat.label;
  }

 // Doughnut
 public doughnutChartLabels:string[]=['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5'];
 public doughnutChartData:number[]= [];
 public doughnutChartType:string = 'doughnut';
 public lineChartColors:any[] =[{backgroundColor:['#acdeaa','#caabd8','#516091','#eef3ad', '#e97a7a']}]
 // events
  public chartClicked(e:any):void {
    let arr = e.active[0];
    console.log(arr);
   console.log(arr._index);
   console.log(this.doughnutChartLabels)
   
 }

 public chartHovered(e:any):void {
   console.log(e);
 }
 barra(event){
console.log('event',event)
}
}