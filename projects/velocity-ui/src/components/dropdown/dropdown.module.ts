import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VelocityDirectivesModule } from '../../directives/directives.module';
import { VelocityDropdownToggleDirective } from '../../directives/dropdownToggle.directive';
import { VelocityDropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [VelocityDropdownComponent, VelocityDropdownToggleDirective],
  imports: [CommonModule, VelocityDirectivesModule, BrowserAnimationsModule],
  exports: [VelocityDropdownToggleDirective, VelocityDropdownComponent],
})
export class VelocityDropdownModule {}
