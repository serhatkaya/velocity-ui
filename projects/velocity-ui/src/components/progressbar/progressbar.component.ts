import { Component, Input } from '@angular/core';
import { progressAnimation } from '../../animations/progressAnimation';

@Component({
  selector: 'vui-progressbar',
  templateUrl: './progressbar.component.html',
  animations: [progressAnimation],
})
export class VelocityProgressbarComponent {
  @Input() progress: number = 0;
}
