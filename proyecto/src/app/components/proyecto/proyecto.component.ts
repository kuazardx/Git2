import { Component, OnInit } from '@angular/core';
import { PruebasDTOService , Proyecto } from '../../servicios/pruebas-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: []
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private _pruebasDTOService: PruebasDTOService,
    private _router: Router,
    private _rutaDTOService:RutaDTOService) { }

  ngOnInit() {
    this.proyectos = this._pruebasDTOService.getProyectos();
  console.log(this.proyectos);
  }
  seleccion(id: number) {
    console.log('Seleccionaste la opcion numero en proyecto', id)
    console.log('number---> ', typeof id)
    this._router.navigate(['/detalle', id] );
    this._rutaDTOService.setIdProyecto(id);
  }

}
