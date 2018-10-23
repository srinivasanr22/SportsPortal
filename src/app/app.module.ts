import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//form module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRouteModule } from './app-routing.module';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tab/tabs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabComponent,
    TabsComponent,
    DashboardComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouteModule,
    HttpClientModule
  ],
  entryComponents: [
    TreeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
