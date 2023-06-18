import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtusProgressbarComponent } from './progressbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [VirtusProgressbarComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VirtusProgressbarComponent],
})
export class VirtusProgressbarModule {}
