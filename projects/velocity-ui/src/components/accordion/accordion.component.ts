import { Component, HostBinding } from '@angular/core';
import { accordionAnimation } from '../../animations/accordionAnimation';
@Component({
  selector: 'vui-accordion',
  animations: [accordionAnimation],
  templateUrl: './accordion.component.html',
})
export class VelocityAccordionComponent {
  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  @HostBinding('class.open')
  get isOpenClass() {
    return this.isOpen;
  }
}
