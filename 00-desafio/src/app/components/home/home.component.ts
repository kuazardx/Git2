import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  title = 'YouTube';
  descripcion=' agregar la descripcion del video que se esta mostrando';
  video = "PF_-o2EJfvs";
  url = "https://www.youtube.com/embed/";
  constructor() { }

  ngOnInit() {
    console.log("home")
  }

}
