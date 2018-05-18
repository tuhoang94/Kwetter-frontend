import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchKweet'
})
export class SearchKweetPipe implements PipeTransform {


  /*
    transform(items: any[], filter: any): any[] {
      
      if (!items || !filter) {
        return items;
      }
      return items.filter(item => item.username.indexOf(filter.username) !== -1);
    }*/

  transform(items: any[], filter: string): any[] {
    if (!items) {
      return [];
    }
    if (!filter) {
      return items;
    }
    filter=filter.toLowerCase();
    return items.filter(it => { return it.username.toLowerCase().includes(filter)
    });
  }

}
