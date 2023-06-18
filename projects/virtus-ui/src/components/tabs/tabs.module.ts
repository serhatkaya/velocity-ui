import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtusTabsComponent } from './tabs.component';
import { VirtusTabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [VirtusTabsComponent, VirtusTabComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [VirtusTabComponent, VirtusTabsComponent],
})
export class VirtusTabsModule {}
