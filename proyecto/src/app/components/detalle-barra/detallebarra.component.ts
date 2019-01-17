import { Component, OnInit, DoCheck, SimpleChanges, OnChanges, NgModule } from '@angular/core';
import { DetallePruebasDTOService } from '../../servicios/detalle-pruebas-dto.service';
import { GraficoBarraDtoService, Grafico } from '../../servicios/grafico-barra-dto.service';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detallebarra',
  templateUrl: './detallebarra.component.html',
  styles: []
})
export class DetallebarraComponent implements OnInit, DoCheck{
constructor(private _detallepruebasDTOService: DetallePruebasDTOService, 
  private _router: Router, 
  private _graficoBarraDtoService: GraficoBarraDtoService, 
  private _graficoCirculoDtoService: GraficoCirculoDtoService ){

}

ngOnInit(){
    
 this.selectBarra = this._detallepruebasDTOService.getInfo();
 this.dat = this._graficoBarraDtoService.getInfo();
 console.log(this.selectBarra.num )
 console.log('oninit')
 console.log(this.dat.datos)
 console.log('barChartData', this.barChartData)
  
//  setTimeout(()=>{
//   this.dat.datos =  [65, 59, 80, 81, 56];
//   this.dat.label = ['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
//   this.barChartData=[{datos :[80, 20, 30, 10, 77], label : this.barChartLabels[0]} ]
//   console.log('barChartData', this.barChartData)
//   let clone = JSON.parse(JSON.stringify(this.barChartData));
//   clone[0].data = this.dat.datos;
//   this.barChartData = clone;
  
//  }, 2000)
  
 
}
 
ngDoCheck(){
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = this.dat.datos;
  this.barChartData = clone;
}


graficos: Grafico[] = [];

selectBarra;
dat: Grafico = {
  id : null,
  label: [],
  datos : []
};




  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    layout: {
          padding: {
              left: 100,
              right: 0,
              top: 0,
              bottom: 0
          }
      }
  
  };


   public barChartLabels:string[] = ['Prueba 1', 'Prueba 2', 'Prueba 3','Prueba 4', 'Prueba 5']
   public barChartData:any[] = [{data: this.dat.datos, label: ''}];
   public lineChartColors:any[] =[{backgroundColor:['#acdeaa','#caabd8','#516091','#eef3ad', '#e97a7a']}]   
  public barChartType:string = 'bar'; 
  public barChartLegend:boolean = false;

  // public chart = new Chart(ctx, {
  //   type: 'line',
  //   data: data,
  //   options: {
  //       layout: {
  //           padding: {
  //               left: 50,
  //               right: 0,
  //               top: 0,
  //               bottom: 0
  //           }
  //       }
  //   }
  // });


  // events
  public chartClicked(e:any):void {
    console.log('e--->', e);
    let arr = e.active[0];
   console.log('arr._model.label', arr._model.label);
    let idCirculo =this._graficoCirculoDtoService.setItem(arr._index)
   console.log('idCirculo', idCirculo)
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


barraInfo(){
  this.dat = this._graficoBarraDtoService.getInfo();
  console.log('barraInfo',this.dat)
}
  // seleccion(num:number){
  //   this._router.navigate(['/detalle', num] );
  //   // this.listaSeleccionada.emit(num);
  //   console.log('num--->', num);
  //   // this.listaSeleccionada.emit(num);
  //  //this._detallepruebasDTOService.setItem(num);

  // }
}