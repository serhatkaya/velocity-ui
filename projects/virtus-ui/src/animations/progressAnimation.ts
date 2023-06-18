import { animate, style, transition, trigger } from '@angular/animations';

export const progressAnimation = trigger('progressAnimation', [
  transition(':enter', [
    style({ width: '0%' }),
    animate('300ms', style({ width: '{{progress}}%' })),
  ]),
]);
