import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { PronosticosComponent } from './pronosticos/pronosticos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AddpronosticoComponent } from './addpronostico/addpronostico.component';
import { EditpronosticoComponent } from './editpronostico/editpronostico.component';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//charts
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PronosticosComponent,    
    ContactoComponent,
    AddpronosticoComponent,
    EditpronosticoComponent,
    ChartsComponent,
    GraficoDonaComponent,
    PlayerComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    CommonModule,
    APP_ROUTES,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
