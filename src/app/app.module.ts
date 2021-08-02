import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeMenuComponent } from './components/welcome-menu/welcome-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmbededComponent } from './components/embeded/embeded.component';
import { DashboardInputComponent } from './components/dashboard-input/dashboard-input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMenuComponent,
    DashboardComponent,
    EmbededComponent,
    DashboardInputComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
