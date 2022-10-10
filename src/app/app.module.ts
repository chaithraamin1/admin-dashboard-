import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { Dashbord3Component } from './dashbord3/dashbord3.component';


@NgModule({
  declarations: [
    AppComponent,
    Dashbord3Component
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   ChartsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
