import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelocityResponsiveHeaderComponent } from './responsive-header.component';
import { VelocityDirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [VelocityResponsiveHeaderComponent],
  imports: [CommonModule, VelocityDirectivesModule],
  exports: [VelocityResponsiveHeaderComponent],
})
export class VelocityResponsiveHeaderModule {}
