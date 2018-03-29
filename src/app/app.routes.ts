import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnInit } from '@angular/core';

import { AppComponent } from '../app/app.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'flowchart', component: FlowchartComponent }
   ];
@NgModule({
    imports: [
      BrowserModule,    
      RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
    providers: []
  })
export class RoutingModule {}