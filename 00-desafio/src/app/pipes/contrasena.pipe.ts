import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value?: any, activar:boolean= true): string {
    
    
    console.log("activar-->",activar);
    if(activar){
      let nombre = ""
      for (let i = 0 ; i < value.length ;i++){
        nombre += "*";
      }
      return nombre;
  } else{
    return value;
  }
    
  }

}
