import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtusToastComponent } from './toast.component';

@NgModule({
  declarations: [VirtusToastComponent],
  imports: [CommonModule],
  exports: [VirtusToastComponent],
})
export class VirtusToastModule {}
