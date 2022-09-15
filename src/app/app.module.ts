import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentListPatientComponent } from './component-list-patient/component-list-patient.component'
import { ComponentDetailComponent } from './component-detail/component-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDetailComponent,
    ComponentListPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
