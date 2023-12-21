import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[vuiOuterClick]',
})
export class VirtusOuterClickDirective {
  @Output() vuiOuterClick: EventEmitter<HTMLElement> =
    new EventEmitter<HTMLElement>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const clickedElement = this.elementRef.nativeElement.contains(target);
    if (!clickedElement) {
      this.vuiOuterClick.emit(target);
    }
  }
}
