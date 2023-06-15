import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VelocityAlertComponent } from './alert.component';

@NgModule({
  declarations: [VelocityAlertComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VelocityAlertComponent],
})
export class VelocityAlertModule {}