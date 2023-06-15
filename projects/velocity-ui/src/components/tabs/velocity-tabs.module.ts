import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelocityTabsComponent } from './tabs.component';
import { VelocityTabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [VelocityTabsComponent, VelocityTabComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VelocityTabComponent, VelocityTabsComponent],
})
export class VelocityTabsModule {}
