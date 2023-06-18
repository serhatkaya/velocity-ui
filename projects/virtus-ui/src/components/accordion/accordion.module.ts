import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtusAccordionComponent } from './accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [VirtusAccordionComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VirtusAccordionComponent],
})
export class VirtusAccordionModule {}
