import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  public transform(durationMin: number): string {
    if (!durationMin) {
      return '';
    }

    let hours = Math.floor(durationMin / 60);
    let minutes = durationMin % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}min`;
    }
    return !isNaN(minutes) ? `${minutes}min` : '';
  }
}
