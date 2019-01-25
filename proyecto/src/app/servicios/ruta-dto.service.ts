import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaDTOService {
idHome:number = null;
idProyecto:number=null;
idDetalle:number=null;
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

getIdHome(){
  return this.idHome;
}
getIdProyecto(){
  return this.idProyecto;
}
getIdDetalle(){
  return this.idDetalle;
}
}
