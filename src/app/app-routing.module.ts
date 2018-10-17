// import below modules to use route.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'

// added for routes

// route  configuration
const routes : Routes = [ 
    { path : '' , component : LoginComponent }
];
 
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {}
