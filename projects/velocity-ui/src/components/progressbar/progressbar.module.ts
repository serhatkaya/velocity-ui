import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelocityProgressbarComponent } from './progressbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [VelocityProgressbarComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VelocityProgressbarComponent],
})
export class VelocityProgressbarModule {}
