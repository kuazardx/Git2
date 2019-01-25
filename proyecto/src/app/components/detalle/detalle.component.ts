import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service';
import { GraficoBarraDtoService } from '../../servicios/grafico-barra-dto.service'
import { DetallePruebasDTOService } from '../../servicios/detalle-pruebas-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import { DatosDTOService } from '../../servicios/datos-dto.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, DoCheck, OnDestroy {

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
    private _rutaDTOService: RutaDTOService,
    public _datosDTOService: DatosDTOService,
    private _graficoBarraDtoService: GraficoBarraDtoService) {  }


  ngOnInit() {
    
    this.eleccionHome =  this._rutaDTOService.getIdHome();
    this.eleccionProyecto = this._rutaDTOService.getIdProyecto();
    this.eleccionDetalle = this._detallepruebasDTOService.getInfo();
    this.eleccionBarra = this._graficoCirculoDtoService.getInfo();
    this.detallebarra = this._graficoBarraDtoService.getVisible();
     setTimeout(()=>{  
      
    }, 2)

  }
 
ocultarCirculo(){
  this.detallecircular = false;
  this.cargando = false;
  this.eleccionBarra.id = null;
}

ngDoCheck(){
  
  if (this.eleccionDetalle.num != null){
      this.detallebarra = this._graficoBarraDtoService.getVisible();
      if (this.eleccionBarra.id !=null)
      this.detallecircular = this._graficoCirculoDtoService.getVisible();  

}
}
ngOnDestroy(){
  console.log('Se va a eliminar el componente');
}

}
