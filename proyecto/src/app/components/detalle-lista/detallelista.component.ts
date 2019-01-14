import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetallePruebasDTOService , Prueba } from '../../servicios/detalle-pruebas-dto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detallelista',
  templateUrl: './detallelista.component.html',
  styles: []
})



export class DetallelistaComponent implements OnInit {


  @Output() listaSeleccionada: EventEmitter<number>;
  pruebas: Prueba[] = [];

  constructor(private _detallepruebasDTOService: DetallePruebasDTOService,
    private _router: Router,
    ) {
      this. listaSeleccionada = new EventEmitter();
     }

  ngOnInit() {
    this.pruebas = this._detallepruebasDTOService.getDetallePruebas();
  console.log(this.pruebas);
  }
  seleccion(num:number){
    //this._router.navigate(['/detalle', num] );
    this.listaSeleccionada.emit(num);
    console.log('num--->', num);
    this.listaSeleccionada.emit(num);

  }

}
