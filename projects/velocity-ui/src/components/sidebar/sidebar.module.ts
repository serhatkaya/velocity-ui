import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VelocityDirectivesModule } from '../../directives/directives.module';
import { VelocitySidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [VelocitySidebarComponent],
  imports: [CommonModule, VelocityDirectivesModule],
  exports: [VelocitySidebarComponent],
})
export class VelocitySidebarModule {}
