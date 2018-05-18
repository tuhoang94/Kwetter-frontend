import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchKweet'
})
export class SearchKweetPipe implements PipeTransform {

  /*transform(value: any, args?: any): any {
    return value.filter;
  }*/

  transform(items: any[], filter: any): any[] {  
    if (!items || !filter) {  
        return items;  
    }  
    return items.filter(item => item.username.indexOf(filter.username) !== -1);  
}  

}
