import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VelocityDirectivesModule } from '../../directives/directives.module';
import { VelocityPipesModule } from '../../pipes';
import { VelocitySidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [VelocitySidebarComponent],
  imports: [CommonModule, VelocityDirectivesModule, VelocityPipesModule],
  exports: [VelocitySidebarComponent],
})
export class VelocitySidebarModule {}
