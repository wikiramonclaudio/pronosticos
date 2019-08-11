import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/*Importar componentes utilizados en la configuración de rutas*/
import {PronosticosComponent} from './pronosticos/pronosticos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AddpronosticoComponent } from './addpronostico/addpronostico.component';
import { EditpronosticoComponent } from './editpronostico/editpronostico.component';
import { ChartsComponent } from './charts/charts.component';


const appRoutes : Routes = [
	{path : '', component : PronosticosComponent},	
	{path: 'pronosticos', component : PronosticosComponent},
	{path: 'add-pronostico', component : AddpronosticoComponent},
	{path: 'edit-pronostico/:id', component : EditpronosticoComponent},	
    {path: 'contacto', component : ContactoComponent},
    {path: 'charts', component : ChartsComponent},
	{path : '**', component : PronosticosComponent} 
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