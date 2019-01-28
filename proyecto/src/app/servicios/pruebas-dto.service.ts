import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PruebasDTOService {
  
  constructor(private http: HttpClient) {
    
    this.http.get('assets/data/data3.json')
    .subscribe( resp =>{
      console.log('resp', resp);
    });
}
getInfoProyectos(){
  
}
 }