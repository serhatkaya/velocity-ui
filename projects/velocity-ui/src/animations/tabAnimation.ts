import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const tabAnimation = trigger('tabAnimation', [
  transition(':increment', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
  transition(':decrement', [animate('300ms', style({ opacity: 0 }))]),
]);
