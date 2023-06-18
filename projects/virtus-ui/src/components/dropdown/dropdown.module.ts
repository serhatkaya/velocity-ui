import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VirtusDirectivesModule } from '../../directives/directives.module';
import { VirtusDropdownToggleDirective } from './dropdownToggle.directive';
import { VirtusDropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [VirtusDropdownComponent, VirtusDropdownToggleDirective],
  imports: [CommonModule, VirtusDirectivesModule, BrowserAnimationsModule],
  exports: [VirtusDropdownToggleDirective, VirtusDropdownComponent],
})
export class VirtusDropdownModule {}
