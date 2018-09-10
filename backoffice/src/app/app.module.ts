import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EolComponent } from './eol/eol.component';
import { HomeComponent } from './home/home.component';
import { EolNotificationComponent } from './eol-notification/eol-notification.component';
import { EolUpdateComponent } from './eol-update/eol-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EolComponent,
    HomeComponent,
    EolNotificationComponent,
    EolUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
