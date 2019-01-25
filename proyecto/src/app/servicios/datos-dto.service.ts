import { Injectable } from '@angular/core';
import { InfoPagina } from '../dto/cliente.dto'
import { HttpClient } from '@angular/common/http';
// import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DatosDTOService {
info: InfoPagina[] =[];
cargada:boolean = false;


  constructor(private http: HttpClient) { 
  this.getJSON().subscribe(data => {
    data.data.forEach(cliente => {
      this.info.push(cliente)
    });

  });
}

getJSON(): Observable<any> {
  return this.http.get("assets/data/resp.json")
}

getInfo(){
  return this.info;
}

}


