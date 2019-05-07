import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BaseAppModule} from '../../../../src/app/base-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
