import { Component } from '@angular/core';
import { DatosDTOService } from './servicios/datos-dto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  
  constructor(private _datosDTOService:DatosDTOService){
    this._datosDTOService.getInfo();
    console.log('app')
  }
  
}
