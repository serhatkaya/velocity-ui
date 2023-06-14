import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelocityTabsComponent } from './tabs.component';
import { VelocityTabComponent } from './tab/tab.component';

@NgModule({
  declarations: [VelocityTabsComponent, VelocityTabComponent],
  imports: [CommonModule],
  exports: [VelocityTabComponent, VelocityTabsComponent],
})
export class VelocityTabsModule {}
