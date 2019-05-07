import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BaseAppModule} from '../../../../src/app/base-app.module';
import {FooterComponent} from './shared/footer/footer.component';
import {BreadcrumbsComponent} from './shared/breadcrumbs/breadcrumbs.component';
import {TopMenuComponent} from './shared/topmenu/topmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    // PERSISTENT
    FooterComponent,
    BreadcrumbsComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseAppModule
  ],
  providers: [],
  exports: [
    TopMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
