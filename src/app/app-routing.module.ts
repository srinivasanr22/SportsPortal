// import below modules to use route.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// added for routes

// route  configuration
const routes : Routes = [ 
    { path : 'login' , component: LoginComponent },
    { path : 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: 'login' }
];
 
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {}
