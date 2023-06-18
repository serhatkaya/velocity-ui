import { Component, Input } from '@angular/core';

@Component({
  selector: 'vui-toast',
  template: `
    <div class="toast" [class]="typeClass" [ngClass]="positionClass">
      <div class="toast-header">
        <div class="toast-title">{{ title }}</div>
        <button class="toast-close-button" (click)="closeToast()">X</button>
      </div>
      <div class="toast-message">{{ message }}</div>
    </div>
  `,
})
export class VirtusToastComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Input() type!: string;
  @Input() position!: string;

  get typeClass(): string {
    return `toast-${this.type}`;
  }

  get positionClass(): string {
    return `toast-${this.position}`;
  }

  public closeToast() {}
}
