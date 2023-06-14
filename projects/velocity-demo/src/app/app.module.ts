import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VelocityAlertModule, VelocityTabsModule } from 'velocity-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VelocityTabsModule, VelocityAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
