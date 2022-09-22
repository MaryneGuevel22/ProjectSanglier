import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDetailComponent } from './component-detail/component-detail.component';
import { ComponentListPatientComponent } from './component-list-patient/component-list-patient.component';
import { DialogCompteRenduComponent } from './dialog-compte-rendu/dialog-compte-rendu.component';
import { DialogInterpretationComponent } from './dialog-interpretation/dialog-interpretation.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentAuthentificationComponent } from './component-authentification/component-authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentDetailComponent,
    ComponentListPatientComponent,
    DialogCompteRenduComponent,
    DialogInterpretationComponent,
    ComponentAuthentificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
