import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  VirtusAccordionModule,
  VirtusAlertModule,
  VirtusDropdownModule,
  VirtusDropzoneModule,
  VirtusProgressbarModule,
  VirtusResponsiveHeaderModule,
  VirtusSidebarModule,
  VirtusStepperModule,
  VirtusTabsModule,
  VirtusToggleModule,
} from 'virtus-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    VirtusTabsModule,
    VirtusAlertModule,
    VirtusResponsiveHeaderModule,
    VirtusAccordionModule,
    VirtusDropdownModule,
    VirtusProgressbarModule,
    VirtusDropzoneModule,
    VirtusSidebarModule,
    ReactiveFormsModule,
    VirtusToggleModule,
    FormsModule,
    VirtusStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
