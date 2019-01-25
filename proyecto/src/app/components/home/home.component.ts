import { Component, OnInit, ViewChild, ChangeDetectorRef,DoCheck, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
import { DatosDTOService } from '../../servicios/datos-dto.service';
import { GraficoBarraDtoService } from '../../servicios/grafico-barra-dto.service';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service';
import {Router} from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { InfoPagina } from '../../dto/cliente.dto';





// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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
// export class HomeComponent implements OnInit {
  
//   datosJson:any ;
  
//   public item = {
//     id : null,
//     datos: null,
//     label: null,
//   };
  
//   constructor(
//               private _router: Router,
//               private _rutaDTOService: RutaDTOService,
//               public _datosDTOService: DatosDTOService,
//               private _graficoBarraDtoService: GraficoBarraDtoService,
//               private _graficoCirculoDtoService: GraficoCirculoDtoService) { }

//   ngOnInit() {
//     this.datosJson = this._datosDTOService.getInfo();
   
//   }

//   seleccion(id: number) {

//     console.log('Seleccionaste la opcion numero en home', id)
//     console.log('number---> ', typeof id)
//     this._router.navigate(['/proyecto', id] );
//     this._rutaDTOService.setIdHome(id) 
//     this._graficoBarraDtoService.setInvisible();
//     this._graficoCirculoDtoService.setInvisible();
   
   
//   }

  



// }

export class HomeComponent implements OnInit, DoCheck, AfterViewInit {

displayedColumns= ['id', 'nombre' ,'numPruebas','ultimoExito','ultimoFallo', 'ultimaDuracion'];
  dataSource: MatTableDataSource<any> ;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  datosJson:any ;
  us:any;
  public item = {
    id : null,
    datos: null,
    label: null,
  };

  constructor(private _router: Router,
              private _rutaDTOService: RutaDTOService,
              public _datosDTOService: DatosDTOService,
              private _graficoBarraDtoService: GraficoBarraDtoService,
              private _graficoCirculoDtoService: GraficoCirculoDtoService,
              private changeDetectorRefs: ChangeDetectorRef) {  }

  ngAfterViewInit() {  
    // this.datosJson = this._datosDTOService.getInfo();
    // const users = this.datosJson
    // this.dataSource = new MatTableDataSource(users);
    // console.log('dataS',this.dataSource.data)
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }



  ngOnInit() {
    setTimeout(()=>{  
      this.datosJson = this._datosDTOService.getInfo();
      const users = this.datosJson
      this.dataSource = new MatTableDataSource(users);
      console.log('dataS',this.dataSource.data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 500)

  }

  ngDoCheck(){
   
   
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  seleccion(id: number) {

        console.log('Seleccionaste la opcion numero en home', id)
        console.log('number---> ', typeof id)
        this._router.navigate(['/proyecto', id] );
        this._rutaDTOService.setIdHome(id) 
        this._graficoBarraDtoService.setInvisible();
        this._graficoCirculoDtoService.setInvisible();
       
       
  }

}






