import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaDTOService {
idHome:number = null;
idProyecto:number=null;
idDetalle:number=null;
idBarra:number = null;
  constructor() {
    console.log("Servicio ruta listo para usar!!!!");
}

setIdHome(id){
  this.idHome = id;
}
setIdProyecto(id){
  this.idProyecto = id;
}
setIdDetalle(id){
  this.idDetalle = id;
}
setIdBarra(id){
  this.idBarra= id;
}

getIdHome(){
  return this.idHome;
}
getIdProyecto(){
  return this.idProyecto;
}
getIdDetalle(){
  return this.idDetalle;
}
getIdBarra(id){
  return this.idBarra;
}
}
