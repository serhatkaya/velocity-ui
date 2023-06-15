import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'vui-alert',
  templateUrl: './alert.component.html',
  animations: [
    trigger('alertAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition(':enter, :leave', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class VelocityAlertComponent {
  @Input() type: string = 'info';
  @Input() dismissible: boolean = false;
  @Input() message: string = '';
  showAlert: boolean = true;

  dismissAlert() {
    this.showAlert = false;
  }
}
