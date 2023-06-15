import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'vui-responsive-header',
  templateUrl: './responsive-header.component.html',
})
export class VelocityResponsiveHeaderComponent {
  @ViewChild('wrapper', { static: true }) wrapper!: ElementRef;
  public isMenuOpen = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public onOuterClick(target: HTMLElement) {
    if (!this.wrapper.nativeElement.contains(target)) {
      this.isMenuOpen = false;
    }
  }
}
