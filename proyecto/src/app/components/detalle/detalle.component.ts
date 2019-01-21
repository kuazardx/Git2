import { Component, OnInit, DoCheck } from '@angular/core';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service'
import { DetallePruebasDTOService } from '../../servicios/detalle-pruebas-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, DoCheck {

  eleccionHome;
  eleccionProyecto;
  eleccionDetalle ;
  eleccionBarra;
  actual =null ;
  temporal;
  detallebarra:boolean = false;
  detallecircular:boolean = false;
  cargando:boolean =true
  constructor(private _detallepruebasDTOService: DetallePruebasDTOService,
    private _graficoCirculoDtoService:GraficoCirculoDtoService,
    private _rutaDTOService: RutaDTOService) { 


  }


  ngOnInit() {
    this.eleccionHome =  this._rutaDTOService.getIdHome();
    this.eleccionProyecto = this._rutaDTOService.getIdProyecto();
    console.log('init')
    this.eleccionDetalle = this._detallepruebasDTOService.getInfo();
    this.eleccionBarra = this._graficoCirculoDtoService.getInfo();
     setTimeout(()=>{

        
    }, 2000)



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
 
ocultarCirculo(){
  this.detallecircular = false;
  this.cargando = false;
  this.eleccionBarra.id = null;
}

// interaccion(){
//   if(this.eleccionDetalle.num != null){
//     this.detallebarra = true;
//     if(this.eleccionBarra.id !=null){
//       this.detallecircular = true;
//     }else{
//       console.log('esperando eleccion Barra');
//     }
//   }else{
//     console.log('esperando eleccion');
//   }
// }



ngDoCheck(){
  if (this.eleccionDetalle.num != null){
      this.detallebarra = true;
      if (this.eleccionBarra.id !=null)
        this.detallecircular = true;
       
        
  }
}

}
