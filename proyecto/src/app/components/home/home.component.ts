import { Component, OnInit } from '@angular/core';
import {Proyecto, PruebasDTOService} from '../../servicios/pruebas-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  proyectos: Proyecto[] = [];
  dataJson:any 

  constructor(private _pruebasDTOService: PruebasDTOService,
              private _router: Router,
              private _rutaDTOService: RutaDTOService) { }

  ngOnInit() {
    this.proyectos = this._pruebasDTOService.getProyectos();
    console.log(this.proyectos);
    this.dataJson = this._pruebasDTOService.getJSON();
    console.log('this.dataJson', this.dataJson)
    
  }
  seleccion(id: number) {
    console.log('Seleccionaste la opcion numero en home', id)
    console.log('number---> ', typeof id)
    this._router.navigate(['/proyecto', id] );
    this._rutaDTOService.setIdHome(id) 
    this.dataJson = this._pruebasDTOService.getJSON();
    console.log('this.dataJson', this.dataJson)
  }



}
