import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[vuiDropdownToggle]',
})
export class VirtusDropdownToggleDirective {
  @Output() onClick = new EventEmitter();

  @HostListener('click')
  handleClick() {
    this.onClick.emit();
  }
}
