import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelocityToastComponent } from './toast.component';

@NgModule({
  declarations: [VelocityToastComponent],
  imports: [CommonModule],
  exports: [VelocityToastComponent],
})
export class VelocityToastModule {}
