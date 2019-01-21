import { ProyectoDTO } from './proyecto.dto'
export class ClienteDTO {
    idCliente:number;
    nombre:string;
    numpruebas: string;
    ultimoExito: string;
    ultimoFallo: string;
    ultimaDuracion: string;
    proyectos:ProyectoDTO []
}