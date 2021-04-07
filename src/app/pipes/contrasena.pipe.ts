import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string,oculto: boolean = true): string {

    return (oculto) ?  "*".repeat(value.length): value ;


    
    
  }

}
