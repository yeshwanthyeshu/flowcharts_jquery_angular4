import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FlowchartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
