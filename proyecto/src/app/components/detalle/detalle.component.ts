import { Component, OnInit, DoCheck } from '@angular/core';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service'
import { DetallePruebasDTOService } from '../../servicios/detalle-pruebas-dto.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, DoCheck {

  eleccionDetalle ;
  eleccionBarra;
  actual =null ;
  temporal;
  detallebarra:boolean = false;
  detallecircular:boolean = false;
  constructor(private _detallepruebasDTOService: DetallePruebasDTOService,
    private _graficoCirculoDtoService:GraficoCirculoDtoService) { 


  }

  ngOnInit() {
    this.eleccionDetalle = this._detallepruebasDTOService.getInfo();
    this.eleccionBarra = this._graficoCirculoDtoService.getInfo();
  }
 
ocultarCirculo(){
  this.detallecircular = false;
  this.eleccionBarra.id = null;
}

interaccion(){
  if(this.eleccionDetalle.num != null){
    this.detallebarra = true;
    if(this.eleccionBarra.id !=null){
      this.detallecircular = true;
    }else{
      console.log('esperando eleccion Barra');
    }
  }else{
    console.log('esperando eleccion');
  }
}



ngDoCheck(){
  if (this.eleccionDetalle.num != null){
      this.detallebarra = true;
      if (this.eleccionBarra.id !=null)
        this.detallecircular = true;
  }
}

}
