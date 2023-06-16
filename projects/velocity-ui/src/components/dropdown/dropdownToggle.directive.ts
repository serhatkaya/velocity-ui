import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[vuiDropdownToggle]',
})
export class VelocityDropdownToggleDirective {
  @Output() onClick = new EventEmitter();

  @HostListener('click')
  handleClick() {
    this.onClick.emit();
  }
}
