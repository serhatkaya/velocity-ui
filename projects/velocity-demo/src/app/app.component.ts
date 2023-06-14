import { Component } from '@angular/core';
import {
  VelocityToastPosition,
  VelocityToastService,
  VelocityToastType,
} from 'velocity-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   *
   */
  constructor(toast: VelocityToastService) {
    toast.show('Başlık', 'Bildirim mesajı', {
      type: VelocityToastType.SUCCESS,
      position: VelocityToastPosition.TOP_RIGHT,
      timeOut: 5000,
    });
  }
  title = 'velocity-demo';
}
