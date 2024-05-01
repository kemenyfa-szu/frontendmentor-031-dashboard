import { Injectable } from '@angular/core';
import { Time } from '../interfaces/time';
import jsonData from '../../data/time-data.json';
import { SpecificTime } from '../interfaces/specific-time';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  getData(): Time[] {
    const data: Time[] = jsonData;
    return data;
  }

  getSpecificData(period: string): SpecificTime[] {
    const data = this.getData();
    const specificData: SpecificTime[] = [];

    for (let item of data) {
      let specificItem = {
        title: item.title,
        bgcolor: item.bgcolor,
        bgicon: item.bgicon,
        period: period,
        current: 0,
        previous: 0,
      };
      switch (period) {
        case 'daily':
          specificItem.current = item.timeframes.daily.current;
          specificItem.previous = item.timeframes.daily.previous;
          break;
        case 'weekly':
          specificItem.current = item.timeframes.weekly.current;
          specificItem.previous = item.timeframes.weekly.previous;
          break;
        case 'monthly':
          specificItem.current = item.timeframes.monthly.current;
          specificItem.previous = item.timeframes.monthly.previous;
          break;
      }
      specificData.push(specificItem);
    }
    console.log(specificData);
    return specificData;
  }
}
