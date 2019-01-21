import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutaDTOService {
idHome:number = null;
idProyecto:number=null;

  constructor() {
    console.log("Servicio ruta listo para usar!!!!");
}

setIdHome(id){
  this.idHome = id;
}
setIdProyecto(id){
  this.idProyecto = id;
}
getIdHome(){
return this.idHome;
}
getIdProyecto(){
return this.idProyecto;
}

}
