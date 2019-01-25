import { Component, OnInit } from '@angular/core';
import { PruebasDTOService } from '../../servicios/pruebas-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import { Router } from '@angular/router';
import { DatosDTOService } from '../../servicios/datos-dto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {

  eleccionHome:number;
  constructor(private _pruebasDTOService: PruebasDTOService,
    private _router: Router,
    private _rutaDTOService:RutaDTOService,
    public _datosDTOService: DatosDTOService) { }

  ngOnInit() {
    this.eleccionHome =  this._rutaDTOService.getIdHome();
  //   this.proyectos = this._pruebasDTOService.getProyectos();
  // console.log(this.proyectos);
console.log("this.eleccionHome", this.eleccionHome)
  }
  seleccion(id: number) {
    console.log('Seleccionaste la opcion numero en proyecto', id)
    console.log('number---> ', typeof id)
    this._router.navigate(['/detalle', id] );
    this._rutaDTOService.setIdProyecto(id);
  }

}
