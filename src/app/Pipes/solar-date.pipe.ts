import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solarDate'
})
export class SolarDatePipe implements PipeTransform {

  transform(gregorianDate: string, ...args: unknown[]): string {
    let gDate = gregorianDate.split('-');

    let gYear:number = +gDate[0];
    let gMonth:number = +gDate[1];
    let gDay:number = +gDate[2];

  //#region convert to Solar date
    let sYear:number = gYear - 621;


    let sMonth:number;
    if(gMonth >= 4){
      sMonth = gMonth - 3;
    }
    else if(gMonth == 3){
      sMonth = 12;
    }
    else if(gMonth == 2){
      sMonth = 11;
    }
    else {
      sMonth = 10;
    }


    let sDay:number = 0;
    if(gDay <= 20 && gMonth == 1)
    {
      sYear = gYear - 622;
      sDay = gDay + 10;
    }
    else if(gDay >=21 && gMonth == 1)
    {
      sYear = gYear - 622;
      sMonth = 11;
      sDay = gDay - 20;
    }

    if(gDay <= 19 && gMonth == 2)
    {
      sYear = gYear - 622;
      sDay = gDay + 11;
    }
    else if(gDay >=20 && gMonth == 2){
      sYear = gYear - 622;
      sMonth = 12;
      sDay = gDay - 19;
    }

    if(gDay <= 20 && gMonth == 3)
    {
      sYear = gYear - 622;
      sDay = gDay + 9;
    }
    else if(gDay >=21 && gMonth == 3){
      sMonth = 1;
      sDay = gDay - 20;
    }

    if(gDay <= 20 && gMonth == 4)
    {
      sDay = gDay + 11;
    }
    else if(gDay >=21 && gMonth == 4)
    {
      sMonth = 2;
      sDay = gDay - 20;
    }

    if(gDay <= 21 && gMonth == 5)
    {
      sDay = gDay + 10;
    }
    else if(gDay >=22 && gMonth == 5)
    {
      sMonth = 3;
      sDay = gDay - 21;
    }

    if(gDay <= 21 && gMonth == 6)
    {
      sDay = gDay + 10;
    }
    else if(gDay >=22 && gMonth == 6)
    {
      sMonth = 4;
      sDay = gDay - 21;
    }

    if(gDay <= 22 && gMonth == 7)
    {
      sDay = gDay + 9;
    }
    else if(gDay >=23 && gMonth == 7)
    {
      sMonth = 5;
      sDay = gDay - 22;
    }

    if(gDay <= 22 && gMonth == 8)
    {
      sDay = gDay + 9;
    }
    else if(gDay >=23 && gMonth == 8)
    {
      sMonth = 6;
      sDay = gDay - 22;
    }

    if(gDay <= 22 && gMonth == 9)
    {
      sDay = gDay + 9;
    }
    else if(gDay >=23 && gMonth == 9)
    {
      sMonth = 7;
      sDay = gDay - 22;
    }

    if(gDay <= 22 && gMonth == 10)
    {
      sDay = gDay + 8;
    }
    else if(gDay >=23 && gMonth == 10)
    {
      sMonth = 8;
      sDay = gDay - 22;
    }

    if(gDay <= 21 && gMonth == 11)
    {
      sDay = gDay + 9;
    }
    else if(gDay >=22 && gMonth == 11)
    {
      sMonth = 9;
      sDay = gDay - 21;
    }

    if(gDay <= 21 && gMonth == 12)
    {
      sDay = gDay + 9;
    }
    else if(gDay >=22 && gMonth == 12)
    {
      sMonth = 10;
      sDay = gDay - 21;
    }

    //! leap year check
    if(gYear % 4 == 0 )
    {
      if(gDay <= 19 && gMonth == 1)
      {
        sYear = gYear - 622;
        sDay = gDay + 11;
      }
      else if(gDay >=20 && gMonth == 1)
      {
        sYear = gYear - 622;
        sMonth = 11;
        sDay = gDay - 19;
      }

      if(gDay <= 18 && gMonth == 2)
      {
        sYear = gYear - 622;
        sDay = gDay + 12;
      }
      else if(gDay >=19 && gMonth == 2){
        sYear = gYear - 622;
        sMonth = 12;
        sDay = gDay - 18;
      }

      if(gDay <= 19 && gMonth == 3)
      {
        sYear = gYear - 622;
        sDay = gDay + 10;
      }
      else if(gDay >=20 && gMonth == 3)
      {
        sYear = gYear - 621;
        sMonth = 1;
        sDay = gDay - 19;
      }

      if(gDay <= 19 && gMonth == 4)
      {
        sDay = gDay + 12;
      }
      else if(gDay >=20 && gMonth == 4)
      {
        sMonth = 2;
        sDay = gDay - 19;
      }

      if(gDay <= 20 && gMonth == 5)
      {
        sDay = gDay + 11;
      }
      else if(gDay >=21 && gMonth == 5)
      {
        sMonth = 3;
        sDay = gDay - 20;
      }

      if(gDay <= 20 && gMonth == 6)
      {
        sDay = gDay + 11;
      }
      else if(gDay >=21 && gMonth == 6)
      {
        sMonth = 4;
        sDay = gDay - 20;
      }

      if(gDay <= 21 && gMonth == 7)
      {
        sDay = gDay + 10;
      }
      else if(gDay >=22 && gMonth == 7)
      {
        sMonth = 5;
        sDay = gDay - 21;
      }

      if(gDay <= 21 && gMonth == 8)
      {
        sDay = gDay + 10;
      }
      else if(gDay >=22 && gMonth == 8)
      {
        sMonth = 6;
        sDay = gDay - 21;
      }

      if(gDay <= 21 && gMonth == 9)
      {
        sDay = gDay + 10;
      }
      else if(gDay >=22 && gMonth == 9)
      {
        sMonth = 7;
        sDay = gDay - 21;
      }

      if(gDay <= 21 && gMonth == 10)
      {
        sDay = gDay + 9;
      }
      else if(gDay >=22 && gMonth == 10)
      {
        sMonth = 8;
        sDay = gDay - 21;
      }

      if(gDay <= 20 && gMonth == 11)
      {
        sDay = gDay + 10;
      }
      else if(gDay >=21 && gMonth == 11)
      {
        sMonth = 9;
        sDay = gDay - 20;
      }

      if(gDay <= 20 && gMonth == 12)
      {
        sDay = gDay + 10;
      }
      else if(gDay >=21 && gMonth == 12)
      {
        sMonth = 10;
        sDay = gDay - 20;
      }
    }
//#endregion

    return sYear == -621 || sYear == -622 ? "" : `${sYear}/${sMonth}/${sDay}`;
  }

}
