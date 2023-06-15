import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VelocityAccordionComponent } from './accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [VelocityAccordionComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VelocityAccordionComponent],
})
export class VelocityAccordionModule {}
