import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})

export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    let retorno:string = '';
    
    if(activar){
      for(let i = 0; i < value.length; i++){
        retorno += '*';
      }
    }else{
      retorno = value;
    }

    return retorno;
  }

}
