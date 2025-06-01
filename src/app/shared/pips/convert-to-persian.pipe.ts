import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToPersian',
  standalone: true
})
export class ConvertToPersianPipe implements PipeTransform {

  transform(str: any): any {
    if(!str) return str
    return str.toString()?.replaceAll(/0/g,'٠').replaceAll(/1/g,'١').replaceAll(/2/g,'٢').replaceAll(/3/g,'٣').replaceAll(/4/g,'۴')
    .replaceAll(/5/g,'۵').replaceAll(/6/g,'۶').replaceAll(/7/g,'۷').replaceAll(/8/g,'٨').replaceAll(/9/g,'٩')
    .replaceAll(/۰/g,'٠').replaceAll(/۱/g,'١').replaceAll(/۲/g,'٢').replaceAll(/۳/g,'٣').replaceAll(/۴/g,'۴')
    .replaceAll(/۵/g,'۵').replaceAll(/۶/g,'۶').replaceAll(/۷/g,'٧').replaceAll(/۸/g,'٨').replaceAll(/۹/g,'٩').replaceAll('¬','‌');   
  }

}
