import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VirtusAlertComponent } from './alert.component';

@NgModule({
  declarations: [VirtusAlertComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VirtusAlertComponent],
})
export class VirtusAlertModule {}
