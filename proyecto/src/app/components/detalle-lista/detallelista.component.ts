import { Component, OnInit } from '@angular/core';
import { DetallePruebasDTOService , Prueba } from '../../servicios/detalle-pruebas-dto.service';
import { GraficoBarraDtoService } from '../../servicios/grafico-barra-dto.service';
import { Router } from '@angular/router';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-detallelista',
  templateUrl: './detallelista.component.html',
  styles: []
})




export class DetallelistaComponent implements OnInit {

 
  pruebas: Prueba[] = [];

  constructor(private _detallepruebasDTOService: DetallePruebasDTOService,
    private _router: Router,
    private _graficoBarraDtoService: GraficoBarraDtoService,
    private _detalleComponent: DetalleComponent
    ) { }

  ngOnInit() {
    this.pruebas = this._detallepruebasDTOService.getDetallePruebas();
  console.log(this.pruebas);
  }
  seleccion(num:number){
    // this._router.navigate(['/detalle', num] );
    // this.listaSeleccionada.emit(num);
    console.log('num--->', num);
    // this.listaSeleccionada.emit(num);
    this._detallepruebasDTOService.setItem(num);
    this._graficoBarraDtoService.setItem(num);
    this._detalleComponent.ocultarCirculo();
    // this._detalleComponent.interaccion();

  }
  

}
