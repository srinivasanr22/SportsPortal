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

//third party
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GroupByPipe } from './group-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabComponent,
    TabsComponent,
    DashboardComponent,
    TreeComponent,
    GroupByPipe
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
