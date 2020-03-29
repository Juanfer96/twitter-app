import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateAgo",
  pure: true
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29)
        // less than 30 seconds ago will show as 'Just now'
        return "Just now";
      const intervals = {
        yr: 31536000, //years
        month: 2592000,
        wk: 604800, //weeks
        d: 86400, //day
        h: 3600, //hours
        m: 60, //minutes
        s: 1 //secondss
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          return counter + " " + i;
        }
      }
    }
    return value;
  }
}
