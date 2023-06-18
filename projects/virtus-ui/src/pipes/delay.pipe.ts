import { Pipe, PipeTransform } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Pipe({
  name: 'vuiDelay',
})
export class VirtusDelayPipe implements PipeTransform {
  transform(value: Observable<any>, ms: number): Observable<any> {
    return value.pipe(delay(ms));
  }
}
