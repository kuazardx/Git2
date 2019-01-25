import { Component, OnInit } from '@angular/core';
import { DetallePruebasDTOService  } from '../../servicios/detalle-pruebas-dto.service';
import { GraficoBarraDtoService } from '../../servicios/grafico-barra-dto.service';
import { GraficoCirculoDtoService } from '../../servicios/grafico-circulo-dto.service'
import { Router } from '@angular/router';
import { DatosDTOService } from '../../servicios/datos-dto.service';
import { RutaDTOService } from '../../servicios/ruta-dto.service';
declare var $:any;



@Component({
  selector: 'app-detallelista',
  templateUrl: './detallelista.component.html',
  styleUrls: ['./detallelista.component.css']
})




export class DetallelistaComponent implements OnInit {

  arrTemporalBarra = [];
  arrTemporalLabel = [];
  arrTemporalId = [];
  datos:any;
  datos2:any;
  datos3:any;
  datos4:any;
  eleccionHome:number;
  eleccionProyecto:number;
  eleccionNumero:number;
  constructor(private _detallepruebasDTOService: DetallePruebasDTOService,
    private _router: Router,
    private _graficoBarraDtoService: GraficoBarraDtoService,
    private _graficoCirculoDtoService: GraficoCirculoDtoService,
    private _rutaDTOService: RutaDTOService,
    public _datosDTOService: DatosDTOService
    ) { }

  ngOnInit() {
    this.eleccionHome =  this._rutaDTOService.getIdHome();
    this.eleccionProyecto = this._rutaDTOService.getIdProyecto();
    this.datos = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto].pruebas;
    this.datos3 = this._datosDTOService.info[this.eleccionHome].proyectos[this.eleccionProyecto];
    console.log('datos1',this.datos);

    $(document).ready(function() {
      $('#example').DataTable();
    });

    
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
    console.log('arrB', this.arrTemporalBarra)
    console.log('arrL', this.arrTemporalLabel)
    console.log('arrI', this.arrTemporalId )
     this._detallepruebasDTOService.setItem(this.datos2);
     this._graficoBarraDtoService.setItemDatos(this.arrTemporalBarra);
     this._graficoBarraDtoService.setItemLabel(this.arrTemporalLabel);
     this._graficoBarraDtoService.setItemID(this.arrTemporalId);
    this._graficoCirculoDtoService.setInvisible();
    this._rutaDTOService.setIdDetalle(num);
    //this._detalleComponent.ocultarCirculo();
  }


}
