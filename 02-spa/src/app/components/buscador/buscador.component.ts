import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit{
 
  heroes: any = {};
  termino:string;
  constructor( private activatedRoute: ActivatedRoute,
               private _router: Router,
               private _heroeService: HeroesService) { 
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.getbuscarHeroes(params['termino'] );
      console.log("this.heroesx--->", this.heroes);
      })
  }
  verHeroe(i) {
    this._router.navigate(['/heroe', i] );
  }
}
