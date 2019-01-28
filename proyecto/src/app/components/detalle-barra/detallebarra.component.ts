import { Component, OnInit, DoCheck } from '@angular/core';
import { DetallePruebasDTOService } from '../../servicios/detalle-pruebas-dto.service';
import { GraficoBarraDtoService } from '../../servicios/grafico-barra-dto.service';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service';
import { DatosDTOService } from '../../servicios/datos-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';

@Component({
  selector: 'app-detallebarra',
  templateUrl: './detallebarra.component.html'
})
export class DetallebarraComponent implements OnInit, DoCheck{
constructor(private _detallepruebasDTOService: DetallePruebasDTOService, 
  private _graficoBarraDtoService: GraficoBarraDtoService, 
  public _datosDTOService: DatosDTOService,
  private _rutaDTOService: RutaDTOService,
  private _graficoCirculoDtoService: GraficoCirculoDtoService ){
}

datos:any;
datos2:any;
datos3:any;
eleccionHome:number;
eleccionProyecto:number;
eleccionNumero:number;
detalleCirculoDatos= [];
detalleCirculoLabel=[];

ngOnInit(){   
 this.selectBarra = this._detallepruebasDTOService.getInfo();
 this.dat = this._graficoBarraDtoService.getInfo();
 this.eleccionHome =  this._rutaDTOService.getIdHome();
 this.eleccionProyecto = this._rutaDTOService.getIdProyecto();
 this.eleccionNumero =  this._rutaDTOService.getIdDetalle();
 this.datos = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas;
 this.datos3 = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto];
}
 
ngDoCheck(){
  this.dat = this._graficoBarraDtoService.getInfo();
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = this.dat.datos;
  this.barChartData = clone;
}

graficos: [] = [];

selectBarra;
dat  = {
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

 
  // events
  public chartClicked(e:any):void {
    this.detalleCirculoDatos= [];
    this.detalleCirculoLabel=[];
    let arr = e.active[0];
  this._graficoCirculoDtoService.setItem(arr._index)
  this._graficoCirculoDtoService.setInvisible();
  this._graficoCirculoDtoService.setInvisibleEsp();
  setTimeout(()=>{  
    this._graficoCirculoDtoService.setVisible();
  }, 700);
    
    this.detalleCirculoDatos = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas[this.eleccionNumero].datos[arr._index].circulo;
    this.detalleCirculoLabel = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas[this.eleccionNumero].datos[arr._index].labelCirculo;
    this._graficoCirculoDtoService.setItemId(arr._index);
    this._graficoCirculoDtoService.setItemDatos(this.detalleCirculoDatos);
    this._graficoCirculoDtoService.setItemLabel(this.detalleCirculoLabel);
  }
 
barraInfo(){
  this.dat = this._graficoBarraDtoService.getInfo();
}
  
}