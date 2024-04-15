import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    //  AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
//  bootstrap: [AppComponent]
})
export class AppModule { }
