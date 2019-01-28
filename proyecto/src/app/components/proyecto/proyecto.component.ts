import { Component, OnInit, ViewChild } from '@angular/core';
import { PruebasDTOService } from '../../servicios/pruebas-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import { Router } from '@angular/router';
import { DatosDTOService } from '../../servicios/datos-dto.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: [
    `table {
      width: 100%;
    }
    
    .mat-form-field {
      font-size: 14px;
      width: 100%;
    }
    
    td, th {
      width: 25%;
    }
    `
  ]
})
export class ProyectoComponent implements OnInit {

  displayedColumns= ['id', 'nombre' ,'numPruebas','ultimoExito','ultimoFallo', 'ultimaDuracion'];
  dataSource: MatTableDataSource<any> ;
  datosProyectoJson:any;
  idHome:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  eleccionHome:number;
  constructor(private _pruebasDTOService: PruebasDTOService,
    private _router: Router,
    private _rutaDTOService:RutaDTOService,
    public _datosDTOService: DatosDTOService) { }

  ngOnInit() {
    this.idHome = this._rutaDTOService.getIdHome();
    this.datosProyectoJson = this._datosDTOService.getInfo();
    
  //   this.eleccionHome =  this._rutaDTOService.getIdHome();
  // //   this.proyectos = this._pruebasDTOService.getProyectos();
  // // console.log(this.proyectos);
  // console.log("this.eleccionHome", this.eleccionHome)

    setTimeout(()=>{  
    // this.datosProyectoJson = this._datosDTOService.getInfo();
    const users = this.datosProyectoJson[this.idHome].proyectos
    this.dataSource = new MatTableDataSource(users);
    console.log('dataS',this.dataSource.data)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }, 500)
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  seleccion(id: number) {
    console.log('Seleccionaste la opcion numero en proyecto', id)
    console.log('number---> ', typeof id)
    this._router.navigate(['/detalle', id] );
    this._rutaDTOService.setIdProyecto(id);
  }

}
