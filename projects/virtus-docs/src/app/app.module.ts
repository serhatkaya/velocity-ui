import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  VirtusAccordionModule,
  VirtusDropdownModule,
  VirtusResponsiveHeaderModule,
} from 'virtus-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VirtusResponsiveHeaderModule,
    VirtusAccordionModule,
    VirtusDropdownModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
