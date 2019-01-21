import { PruebaDTO } from './prueba.dto'

export class ProyectoDTO {
id:number;
nombre: string;
numpruebas: string;
ultimoExito: string;
ultimoFallo: string;
ultimaDuracion: string;
ultimoPush: string;
pruebas:PruebaDTO []
}