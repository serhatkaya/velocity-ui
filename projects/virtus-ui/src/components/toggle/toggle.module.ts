import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtusToggleComponent } from './toggle.component';

@NgModule({
  declarations: [VirtusToggleComponent],
  imports: [CommonModule],
  exports: [VirtusToggleComponent],
})
export class VirtusToggleModule {}
