import { Pipe, PipeTransform } from '@angular/core';
import { Fecha } from '../models/pcs.model';
import { Mes } from 'src/models/general.model';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'porcentajeMes'
})
export class PorcentajeMesPipe implements PipeTransform {

  transform(value: Fecha[], ...args: unknown[]): unknown {
    const [mesRegistro] = args as Array<Mes>
    const mes = value.find(info => info.mes == mesRegistro.mes)
    const anio = value.find(info => info.anio == mesRegistro.anio)
    // console.log(' mes ------>> ' + mes.mes)
    // console.log(' anio ------>> ' + anio.anio)

    if (mes && anio && mes.porcentaje > 0) {
      //console.log(' mes.porcentaje ------>> ' + mes.porcentaje)
      return this.formateaValor(formatCurrency(mes.porcentaje, 'en-US', getCurrencySymbol('USD', 'wide')))

      const porcentaje = Number(mes.porcentaje);
      return isNaN(porcentaje) ? 0 : porcentaje;
    }

    return this.formateaValor(formatCurrency(0, 'en-US', getCurrencySymbol('USD', 'wide')))
    return 0;
  }

  formateaValor(valor) {
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
  }
}
