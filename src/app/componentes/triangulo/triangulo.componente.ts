import { Componente } from '@angular/core';


@Componete({
  selector: 'triangulo-componete',
  templateUrl: 'triangulo.componente.html'
})
export class TrianguloComponente{
  altura: number = 0 ;
  base: number = 0;
  resultado : string ;

calcular() : void {
  let area = number(this.base) * number(this.altura) / 2;
  this.resultado = 'a área é:' +area;
  }
}
