import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRouteModule } from './app-routing.module';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tab/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
