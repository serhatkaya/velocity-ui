import { Component, Input } from '@angular/core';

@Component({
  selector: 'vui-alert',
  templateUrl: './alert.component.html',
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
