import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[outerClick]',
})
export class VelocityOuterClickDirective {
  @Output() outerClick: EventEmitter<HTMLElement> =
    new EventEmitter<HTMLElement>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.outerClick.emit(target);
    }
  }
}
