import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VelocitySidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [VelocitySidebarComponent],
  imports: [CommonModule],
  exports: [VelocitySidebarComponent],
})
export class VelocitySidebarModule {}
