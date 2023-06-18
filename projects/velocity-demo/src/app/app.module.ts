import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  VelocityAccordionModule,
  VelocityAlertModule,
  VelocityDropdownModule,
  VelocityDropzoneModule,
  VelocityProgressbarModule,
  VelocityResponsiveHeaderModule,
  VelocitySidebarModule,
  VelocityTabsModule,
  VelocityToggleModule,
} from 'velocity-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    VelocityTabsModule,
    VelocityAlertModule,
    VelocityResponsiveHeaderModule,
    VelocityAccordionModule,
    VelocityDropdownModule,
    VelocityProgressbarModule,
    VelocityDropzoneModule,
    VelocitySidebarModule,
    ReactiveFormsModule,
    VelocityToggleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
