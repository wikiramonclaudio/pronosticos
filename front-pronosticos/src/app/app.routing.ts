import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/*Importar componentes utilizados en la configuración de rutas*/
import {PronosticosComponent} from './pronosticos/pronosticos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AddpronosticoComponent } from './addpronostico/addpronostico.component';
import { EditpronosticoComponent } from './editpronostico/editpronostico.component';
import { ChartsComponent } from './charts/charts.component';
import { RoleAdminGuard, LoginGuard } from './guards/role-admin-guard.guard';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

LoginGuard

const appRoutes : Routes = [
    {path : '', component : HomeComponent},	
    {path : 'home', component : HomeComponent},	
    {path : 'register', component : RegisterComponent},	
	{path: 'pronosticos',  canActivate: [LoginGuard], component : PronosticosComponent},
	{path: 'add-pronostico',  canActivate: [RoleAdminGuard], component : AddpronosticoComponent},
	{path: 'edit-pronostico/:id',  canActivate: [RoleAdminGuard], component : EditpronosticoComponent},	
    {path: 'contacto', component : ContactoComponent},
    {path : 'users', canActivate: [RoleAdminGuard], component : UsersComponent, data: { title:'Usuarios'}},            
    {path: 'charts', component : ChartsComponent},
	{path : '**', component :HomeComponent} 
    //lazyload
    // {
    //     path: '',
    //     component: PagesComponent,
    //     canActivate: [LoginGuardGuard],
    //     loadChildren: './pages/pages.module#PagesModule'
    // },
    // { path : '**', component : NopagefoundComponent },
    
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash : true });
// export const appRoutingProviders: any[] = [];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);