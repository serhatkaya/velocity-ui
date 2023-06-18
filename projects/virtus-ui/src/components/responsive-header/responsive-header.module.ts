import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtusResponsiveHeaderComponent } from './responsive-header.component';
import { VirtusDirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [VirtusResponsiveHeaderComponent],
  imports: [CommonModule, VirtusDirectivesModule],
  exports: [VirtusResponsiveHeaderComponent],
})
export class VirtusResponsiveHeaderModule {}
