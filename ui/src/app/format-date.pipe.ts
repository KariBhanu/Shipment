import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(objectArray: any[]): any[] {
    if (!objectArray) return [];

    return objectArray.map(obj => {
      if (obj.ExpectedShipmentDate) {
        const parts = obj.ExpectedShipmentDate.split('-');
        if(parts.length === 3){
          const day = parseInt(parts[0]);
          const month = parseInt(parts[1]) - 1; // Month is zero-based in JavaScript Date objects
          const year = parseInt(parts[2]);
          const dateObj = new Date(year, month, day);
          obj.ExpectedShipmentDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
        }
      }
      return obj;
    });
  }

}
