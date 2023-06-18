import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const accordionAnimation = trigger('accordionAnimation', [
  state(
    'closed',
    style({
      height: '0',
      visibility: 'hidden',
      opacity: 0,
    })
  ),
  state(
    'open',
    style({
      height: '*',
      visibility: 'visible',
      opacity: 1,
    })
  ),
  transition('closed <=> open', animate('300ms ease-in-out')),
]);
