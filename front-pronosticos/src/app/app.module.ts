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
import { UsersComponent } from './users/users.component';
import { RoleAdminGuard, LoginGuard } from './guards/role-admin-guard.guard';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PronosticosComponent,    
    ContactoComponent,
    AddpronosticoComponent,
    EditpronosticoComponent,
    ChartsComponent,
    GraficoDonaComponent,
    PlayerComponent,
    UsersComponent,
    HomeComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    CommonModule,
    APP_ROUTES,
    ChartsModule
  ],
  providers: [
    UserService,
    RoleAdminGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
