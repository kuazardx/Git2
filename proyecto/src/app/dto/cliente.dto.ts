import { Observable } from 'rxjs/Observable';

export interface InfoPagina{
  idCliente?: number;
  nombre?: string;
  numpruebas?: string;
  ultimoExito?: string;
  ultimoFallo?: string;
  ultimaDuracion?: string;
  proyectos?: Proyecto[];
}

interface Proyecto {
  id?: number;
  nombre?: string;
  numpruebas?: string;
  ultimoExito?: string;
  ultimoFallo?: string;
  ultimaDuracion?: string;
  ultimoPush?: string;
  pruebas?: Prueba[];
}

interface Prueba {
  id?: number;
  num?: number;
  ejecucion?: string;
  fallo?: string;
  datos?: Dato[];

}
interface Dato {
  barra?: number;
  labelBarra?: string;
  circulo?: number[];
  labelCirculo?: string[];
  }



