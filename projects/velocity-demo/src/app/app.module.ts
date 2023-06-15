import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  VelocityAccordionModule,
  VelocityAlertModule,
  VelocityDropdownModule,
  VelocityProgressbarModule,
  VelocityResponsiveHeaderModule,
  VelocityTabsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
