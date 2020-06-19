import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpRequestComponent } from './http-request/http-request.component';

@NgModule({
  declarations: [
    AppComponent,
    ThermometerComponent,
    NotificationComponent,
    HeaderComponent,
    HomeComponent,
    HttpRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
