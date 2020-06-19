import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ThermometerComponent } from './thermometer/thermometer.component';
import { HomeComponent } from './home/home.component';
import { HttpRequestComponent } from './http-request/http-request.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'thermometer',
    component: ThermometerComponent
  },
  {
    path: 'http-request',
    component: HttpRequestComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
