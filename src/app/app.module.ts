import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SolarDatePipe } from './Pipes/solar-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SolarDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
