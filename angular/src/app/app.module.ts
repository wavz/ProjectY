import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SystemViewComponent } from './main-view/system-view/system-view.component';
import { ListSensorComponent } from './main-view/system-view/list-sensor/list-sensor.component';
import { SensorComponent } from './main-view/system-view/list-sensor/sensor/sensor.component';
import { SiteViewComponent } from './main-view/system-view/site-view/site-view.component';
import { SiteListComponent } from './main-view/system-view/site-view/site-list/site-list.component';
import { SiteComponent } from './main-view/system-view/site-view/site-list/site/site.component';
import { ServerViewComponent } from './main-view/system-view/site-view/server-view/server-view.component';
import { ServerComponent } from './main-view/system-view/site-view/server-view/server/server.component';
import { CommandListComponent } from './main-view/system-view/site-view/server-view/command-list/command-list.component';
import { CommandComponent } from './main-view/system-view/site-view/server-view/command-list/command/command.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainViewComponent,
    SystemViewComponent,
    ListSensorComponent,
    SensorComponent,
    SiteViewComponent,
    SiteListComponent,
    SiteComponent,
    ServerViewComponent,
    ServerComponent,
    CommandListComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
