import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const dropdownState = trigger('dropdownState', [
  state(
    'closed',
    style({
      transform: 'scale(0.8)',
      opacity: 0,
    })
  ),
  state(
    'open',
    style({
      transform: 'scale(1)',
      opacity: 1,
    })
  ),
  transition(
    'closed <=> open',
    animate('300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')
  ),
]);
