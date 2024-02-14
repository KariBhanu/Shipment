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
      if (obj.BillToAddress.EmailID){
        if (obj.BillToAddress.EmailID.includes('.')){
          const temp = obj.BillToAddress.EmailID.split('@');
          let firstHalf = "";
          for (let i = 0; i < temp[0].length - 1; i++) {
            firstHalf += "*";
          }
          let secondHalf = "";
          const temp2 = temp[1].split('.');
          for (let i = 0; i < temp2[0].length - 1; i++) {
            secondHalf += "*";
          }
          let f = obj.BillToAddress.EmailID[0];
          obj.BillToAddress.EmailID = f + firstHalf + '@' + secondHalf + "*com";
        }
      }
      return obj;
    });
  }

}
