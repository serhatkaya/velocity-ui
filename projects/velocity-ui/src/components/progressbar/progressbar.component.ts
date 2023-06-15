import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'vui-progressbar',
  templateUrl: './progressbar.component.html',
  animations: [
    trigger('progressAnimation', [
      transition(':enter', [
        style({ width: '0%' }),
        animate('20ms', style({ width: '{{progress}}%' })),
      ]),
    ]),
  ],
})
export class VelocityProgressbarComponent {
  @Input() progress: number = 0;
}
