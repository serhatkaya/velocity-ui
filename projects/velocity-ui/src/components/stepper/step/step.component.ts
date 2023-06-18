import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'vui-step',
  templateUrl: './step.component.html',
})
export class VelocityStepComponent {
  @Input() id: string = Math.random().toString(36).substring(2);
  @Input() title!: string;
  @Input() condition: boolean = true;
  broadcaster = new EventEmitter<'next' | 'previous'>();
  visible: boolean = false;

  public goNext() {
    this.broadcaster.emit('next');
  }

  public goBack() {
    this.broadcaster.emit('previous');
  }
}
