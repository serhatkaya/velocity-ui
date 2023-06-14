import { Component, Input } from '@angular/core';

@Component({
  selector: 'vui-tab',
  templateUrl: './tab.component.html',
})
export class VelocityTabComponent {
  @Input() title: string = '';
  @Input() disabled: boolean = false;
  active = false;
}
