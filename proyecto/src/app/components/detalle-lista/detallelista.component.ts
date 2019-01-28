import { Component, OnInit, ViewChild } from '@angular/core';
import { DetallePruebasDTOService  } from '../../servicios/detalle-pruebas-dto.service';
import { GraficoBarraDtoService } from '../../servicios/grafico-barra-dto.service';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service'
import { Router } from '@angular/router';
import { DatosDTOService } from '../../servicios/datos-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { empty } from 'rxjs';
declare var $:any;



@Component({
  selector: 'app-detallelista',
  templateUrl: './detallelista.component.html',
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




export class DetallelistaComponent implements OnInit {

  
  displayedColumns= ['id', 'fecha' ,'ultimoFallo'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  arrTemporalBarra = [];
  arrTemporalLabel = [];
  arrTemporalId = [];
  dato:any;
  datos:any;
  datos2:any;
  datos3:any;
  datos4:any;
  eleccionHome:number;
  eleccionProyecto:number;
  eleccionNumero:number;
  graficoBarraSeleccionado:number;
  counter:number;
  datosPruebasJson:any;
  dataSource: MatTableDataSource<any> ;

  constructor(private _detallepruebasDTOService: DetallePruebasDTOService,
    private _graficoBarraDtoService: GraficoBarraDtoService,
    private _graficoCirculoDtoService: GraficoCirculoDtoService,
    private _rutaDTOService: RutaDTOService,
    private _router: Router,
    public _datosDTOService: DatosDTOService
    ) { }

  ngOnInit() {
console.log('NaN',this.graficoBarraSeleccionado)
    this.eleccionHome =  this._rutaDTOService.getIdHome();
    this.eleccionProyecto = this._rutaDTOService.getIdProyecto();
    this.datosPruebasJson = this._datosDTOService.getInfo();
    this.datos = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas;
     this.datos3 = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto];
    // console.log('datos1',this.datos);    
    console.log('detalleLista',this.datosPruebasJson[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas)
    console.log('this.eleccionProyecto',this.eleccionProyecto)
    this.dato=this.datosPruebasJson[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas
    setTimeout(()=>{  
      const users = this.datosPruebasJson[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas
      this.dataSource = new MatTableDataSource(users);
      console.log('dataS',this.dataSource.data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      for (let i = 1; i < this.datosPruebasJson[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas.length; i++) {
        this.counter =  i
      } 
      setTimeout(()=>{  
      this.seleccion(this.counter);
    }, 300);
    }, 500)
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  seleccion(num:number){
    this.arrTemporalBarra = [];
    this.arrTemporalLabel = [];
    this.arrTemporalId= [];
    this.eleccionNumero = num
    this.datos2 = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas[this.eleccionNumero]
    this.datos4 = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas[this.eleccionNumero].datos
    for (let i = 0; i < this.datos4.length; i++) {
      this.arrTemporalBarra.push(this.datos4[i].barra);
      this.arrTemporalLabel.push(this.datos4[i].labelBarra);
      this.arrTemporalId.push(i);
    }
     this._detallepruebasDTOService.setItem(this.datos2);
     this._graficoBarraDtoService.setItemDatos(this.arrTemporalBarra);
     this._graficoBarraDtoService.setItemLabel(this.arrTemporalLabel);
     this._graficoBarraDtoService.setItemID(this.arrTemporalId);
     this._graficoCirculoDtoService.setInvisible();
     this._graficoBarraDtoService.setInvisible();
     this._graficoCirculoDtoService.setInvisibleEsp();
     setTimeout(()=>{  
      this._graficoBarraDtoService.setVisible();
      this._graficoCirculoDtoService.setVisibleEsp();
    }, 700);
    
    this._rutaDTOService.setIdDetalle(num);
    this.graficoBarraSeleccionado = num;
  }


}
